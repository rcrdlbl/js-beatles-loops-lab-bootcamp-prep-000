// add solution here
function theBeatlesPlay(musicians, instruments){
  var strings = [];
  for (var i = 0; i< musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var lovely = [];
  do {
    lovely.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return lovely;
}