function anagram() {
  var text = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
  var arrAlphabet = [];
  var arrTemp = [];
  var arrResult = [];
  var arrResultAll = [];
  var arrIgnore = [];
  for (m = 0; m < text.length; m++) {
    if (typeof arrIgnore[m] !== "undefined") {
      continue;
    }
    str = text[m].split("");
    arrAlphabet = [];
    for (i = 0; i < str.length; i++) {
      if (typeof arrAlphabet[str[i]] !== "undefined") {
        arrAlphabet[str[i]] += 1;
      } else {
        arrAlphabet[str[i]] = 1;
      }
    }
    arrResult.push(text[m]);
    for (j = m + 1; j < text.length; j++) {
      arrTemp = arrAlphabet;
      str2 = text[j].split("");
      if (str.length != str2.length) {
        continue;
      }
      for (k = 0; k < str2.length; k++) {
        if (typeof arrTemp[str2[k]] !== "undefined") {
          arrTemp[str2[k]] -= 1;
        } else {
          arrTemp[str2[k]] = -1;
        }
      }
      sum = 0;
      arrTemp.forEach(function (number) {
        sum += abs(number);
      });
      if (sum == 0) {
        arrIgnore[j] = 1;
        arrResult.push(text[j]);
      }
    }
    arrResultAll.push(arrResult);
    arrResult = [];
  }
}
