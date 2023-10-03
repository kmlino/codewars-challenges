function alphabetPosition(text) {
    res = ''; // string que será retornada

    // Iterando sobre cada letra do texto e já fazendo a comparação com a tabela ASCII
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