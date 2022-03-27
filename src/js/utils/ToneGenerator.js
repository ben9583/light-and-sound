// Source: https://stackoverflow.com/questions/39200994/how-to-play-a-specific-frequency-with-javascript#44215748

let audioCtx = new(window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    }, duration);
}

function startNote(frequency, duration) {
    var oscillator = audioCtx.createOscillator();
  
    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  
    return oscillator
}

function stopNote(oscillator) {
    oscillator.stop()
}

export { playNote, startNote, stopNote }