<!-- Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] -->



function tower_builder(int $n): array {
$array = [];
$cont = 1;
if($n == 1){
  $array[$n-1] = '*';
  return $array;
} else {
  for($i = 0; $i < $n; $i++){
    if($i == 0){
      $array[$i] = str_repeat(' ', $n-$cont) . str_repeat('*', $i+$cont) . str_repeat(' ', $n-$cont);
    } else {
      $array[$i] = str_repeat(' ', $n-$cont) . str_repeat('*', $i+$cont) . str_repeat(' ', $n-$cont);	
    }
  $cont++;
  }
}
return $array;
}