/*
DESCRIPTION:

You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.
It is known that all events are recorded in chronological order and two events can't occur in the same second.
Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
*/


function checkLogs(log) {
  if (log.length == 1){
    return 1
  } else if (log.length == 0) {
    return 0
  }
  
  let i;
  let cont = 1;
  
  for (i = 0; i < log.length; i++){
    if (i > 0){
      var [prevHr, prevMn, prevSc] = log[i-1].split(':')
      var [currHr, currMn, currSc] = log[i].split(':')
      if (prevHr > currHr){
        cont++;
        console.log(`Total de dias: ${cont} | ${prevHr}:${prevMn}:${prevSc} para ${currHr}:${currMn}:${currSc}`)
      }
      else if (prevHr === currHr && prevMn === currMn && prevSc === currSc) {
        cont++;
        console.log(`Total de dias: ${cont} | ${prevHr}:${prevMn}:${prevSc} para ${currHr}:${currMn}:${currSc}`)
      }
      else if (prevHr === currHr && prevMn === currMn && prevSc > currSc) {
        cont++;
        console.log(`Total de dias: ${cont} | ${prevHr}:${prevMn}:${prevSc} para ${currHr}:${currMn}:${currSc}`)
      }
      else if (prevHr === currHr && prevMn > currMn) {
        cont++
        console.log(`Total de dias: ${cont} | ${prevHr}:${prevMn}:${prevSc} para ${currHr}:${currMn}:${currSc}`)
      }
    }
  }
  return cont

}