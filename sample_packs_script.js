
var playbtn = document.querySelectorAll('.playbtn');


const wavesurfer0 = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'FXS/WCKiD Atmos 01 Emin.wav',
  responsive: true,
  hideScrollbar: true,
  normalize:true,
  minPxPerSec:1
})
const wavesurfer1 = WaveSurfer.create({
  container: '#waveform1',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'FXS/WCKiD Downlifter 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer2 = WaveSurfer.create({
  container: '#waveform2',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'FXS/WCKiD Impact 03.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer3 = WaveSurfer.create({
  container: '#waveform3',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'FXS/WCKiD Uplifter 02.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer4 = WaveSurfer.create({
  container: '#waveform4',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'CYMBALS/WCKiD Closed Hi-Hat 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer5 = WaveSurfer.create({
  container: '#waveform5',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'CYMBALS/WCKiD Crash 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer6 = WaveSurfer.create({
  container: '#waveform6',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'CYMBALS/WCKiD Open Hi-Hat 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer7 = WaveSurfer.create({
  container: '#waveform7',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'CYMBALS/WCKiD Ride 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer8 = WaveSurfer.create({
  container: '#waveform8',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'DRUMS AND VOCAL FXS/WCKiD Kick 05.wav',
  responsive: true,
  hideScrollbar: true,
  minPxPerSec:8
})
const wavesurfer9 = WaveSurfer.create({
  container: '#waveform9',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'DRUMS AND VOCAL FXS/WCKiD Kick 07.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer10 = WaveSurfer.create({
  container: '#waveform10',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'DRUMS AND VOCAL FXS/WCKiD Snare 02.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer11 = WaveSurfer.create({
  container: '#waveform11',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'DRUMS AND VOCAL FXS/WCKiD Vox FX 06.wav',
  responsive: true,
  hideScrollbar: true,
  minPxPerSec:1,
  

  
})
const wavesurfer12 = WaveSurfer.create({
  container: '#waveform12',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'BASSES AND GLITCHES/WCKiD Bass Glitch 01.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer13 = WaveSurfer.create({
  container: '#waveform13',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'BASSES AND GLITCHES/WCKiD Bass Loop 140 E 03.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer14 = WaveSurfer.create({
  container: '#waveform14',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'BASSES AND GLITCHES/WCKiD Bass Loop 140 D 04.wav',
  responsive: true,
  hideScrollbar: true,
})
const wavesurfer15 = WaveSurfer.create({
  container: '#waveform15',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 10,
  barWidth: 1,
  url: 'BASSES AND GLITCHES/WCKiD Bass Glitch 04.wav',
  responsive: true,
  hideScrollbar: true,
})

console.log(playbtn.length);
let isFirstIcon = true;

for (let i = 0; i < playbtn.length; i++) {
  playbtn[i].addEventListener('click', () => {




    const wave = "wavesurfer";
    let k = 0;

    const pause = 'pause';
    const play = 'play';
    let result;



    isFirstIcon = !isFirstIcon;

    let j = 0;
    while (j < playbtn.length) {

      playbtn[j].setAttribute('name', 'play-outline');
      result = wave + j;
      eval(`${result}.${pause}()`);
      j++;


    }
    result = wave + i;


    if (isFirstIcon) {
      playbtn[i].setAttribute('name', 'play-outline');

      eval(`${result}.${pause}()`);
    } else {
      playbtn[i].setAttribute('name', 'pause-circle-outline');
      eval(`${result}.${play}()`);
    }


  });
}


