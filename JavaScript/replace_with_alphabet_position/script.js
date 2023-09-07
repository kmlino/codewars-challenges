function alphabetPosition(text) {
    res = '';
    for (var i = 0; i < text.length; i++) {
      for (var j = 65; j <= 90; j++) {
        if (text[i].codePointAt(j) < 65 || text[i].codePointAt(j) > 90) continue
        if (text[i].toUpperCase() == String.fromCharCode(j)) {
          res += !res ? `${j-64}` : ` ${j-64}`;
        }
      }
    }
    return res
}