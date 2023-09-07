function checkLogs(log) {
  if (log.length == 0) return 0
  if (log.length == 1) return 1
  
  let i;
  let cont = 1;

  for (i = 1; i < log.length; i++) {
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