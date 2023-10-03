function checkLogs(log) {
  // Primeiras validações
  if (log.length == 0) return 0
  if (log.length == 1) return 1
  
  // Contador começa com 1 pois apenas logs vazios retornam "0 dias"
  let cont = 1;

  // Itera sobre cada horário comparando com o anterior, se houver
  for (let i = 1; i < log.length; i++) {
    let [prevHr, prevMn, prevSc] = log[i-1].split(':')
    let [currHr, currMn, currSc] = log[i].split(':')

    if (prevHr === currHr && prevMn === currMn && prevSc === currSc) {
      cont++;
    }
    else if (prevHr === currHr && prevMn === currMn && prevSc > currSc) {
      cont++;
    }
    else if (prevHr === currHr && prevMn > currMn) {
      cont++;
    }
    else if (prevHr > currHr) {
      cont++;
    }
  }
  return cont;
}