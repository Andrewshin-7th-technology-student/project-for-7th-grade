class Audio {
  constructor() {
    this.audioContext = new AudioContext();
    this.soundEffects = [];
    this.music = [];
  }

  init() {
    this.soundEffects.push(new SoundEffect('jump.wav'));
    this.soundEffects.push(new SoundEffect('crash.wav'));
    this.music.push(new Music ('background_music.mp3'));
  }

  playSoundEffect(soundEffect) {
    soundEffect.play();
  }

  playMusic(music) {
    music.play();
  }
}

class SoundEffect {
  constructor(src) {
    this.src = src;
    this.audio = new Audio(src);
  }

  play() {
    this.audio.play();
  }
}

class Music {
  constructor(src) {
    this.src = src;
    this.audio = new Audio(src);
  }

  play() {
    this.audio.play();
  }
}

export default Audio;
