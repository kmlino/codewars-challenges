<!-- 
    
DESCRIPTION:
Task
In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.

Examples:
input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#" 

-->


function assembleString(array $array): string{
  $res = '';
  foreach ($array as $word){
    if(substr_count($word, '*') == strlen($word) || substr_count($word, '#') > 0){
      $res = str_replace('*', '#', $word);
      break;
    } else if(substr_count($res, '*') == 0 && strlen($res) == strlen($word)){
      break;
    }
    $new_array = str_split($word);
    foreach ($new_array as $key => $char){
      if($char != '*'){
        $res .= $char;
      } else {
        foreach ($array as $word2){
          if(substr($word2, $key, 1) != '*'){
            $res .= substr($word2, $key, 1);
            break;
          }
        }
      }
    }
  }
  return $res;
}


echo assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])