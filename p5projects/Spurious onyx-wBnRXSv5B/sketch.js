var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.continuous = true; // do continuous recognition
foo.interimResults = true; // allow partial recognition (faster, less accurate)
foo.start(); // start listening

function showResult() {
  console.log(foo.resultString); // log the result
  return foo.resultString;
}

function setup() {
  noCanvas();
}
