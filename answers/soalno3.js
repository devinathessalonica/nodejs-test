function findFirstStringInBracket(str) {
    // check if input valid
    if (str.length <= 0) {
      return "";
    }
  
    let indexFirstBracketFound = str.indexOf("(");
  
    // check if first bracket found
    if (indexFirstBracketFound < 0) {
      return "";
    }
  
    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
  
    // check if there's string after bracket
    if (!wordsAfterFirstBracket) {
      return "";
    }
  
    wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
  
    // check if there's closing bracket
    if (indexClosingBracketFound < 0) {
      return "";
    }
    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
  }