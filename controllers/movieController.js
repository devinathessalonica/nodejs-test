var dotenv = require("dotenv").config();
const models = require("../models/index");
const axios = require("axios");

// search all movies.
exports.search = function (req, res) {
  try {
    var api_url = process.env.omdb_url;
    var api_key = process.env.omdb_key;
    var params = req.query;
    console.log(params.s);
    if (api_url === "") {
      res.json({
        status: "ERROR",
        message: "Empty OMDB url set in config",
        data: {},
      });
    }

    models.apilog.create({
      endpoint: api_url + "/search",
      params: JSON.stringify(params),
    });

    axios
      .get(api_url, {
        params: {
          apikey: api_key,
          s: params.s,
          page: params.page,
        },
      })
      .then((data) => {
        res.status(200).json(data.data);
      });
  } catch (err) {
    res.json({
      status: "ERROR",
      message: err.message,
      data: {},
    });
  }
};

// get detail a movie.
exports.detail = function (req, res) {
  try {
    var api_url = process.env.omdb_url;
    var api_key = process.env.omdb_key;
    var params = req.query;
    if (api_url === "") {
      res.json({
        status: "ERROR",
        message: "EMPTY",
        data: {},
      });
    }

    models.apilog.create({
      endpoint: process.env.omdb_url + "/detail",
      params: JSON.stringify(params),
    });

    axios
      .get(api_url, {
        params: {
          apikey: api_key,
          i: params.i,
        },
      })
      .then((data) => {
        res.status(200).json(data.data);
      });
  } catch (err) {
    res.json({
      status: "ERROR",
      message: err.message,
      data: {},
    });
  }
};
