// Source: https://stackoverflow.com/questions/39200994/how-to-play-a-specific-frequency-with-javascript#44215748

let audioCtx = new(window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
  let oscillator = audioCtx.createOscillator();
  let negativeGainNode = audioCtx.createGain();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency;
  oscillator.connect(negativeGainNode);
  negativeGainNode.connect(audioCtx.destination);

  negativeGainNode.gain.value = 0.2;

  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    }, duration);
}

function startNote(frequency, duration) {
    let oscillator = audioCtx.createOscillator();
    let negativeGainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    oscillator.connect(negativeGainNode);
    negativeGainNode.connect(audioCtx.destination);

    negativeGainNode.gain.value = 0.2;

    oscillator.start();
  
    return oscillator
}

function stopNote(oscillator) {
    oscillator.stop()
}

export { playNote, startNote, stopNote }