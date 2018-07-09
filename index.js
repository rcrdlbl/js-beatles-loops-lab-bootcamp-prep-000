// add solution here
function theBeatlesPlay(musicians, instruments){
  var strings = [];
  for (var i = 0; i< musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return strings;
}