var keyboard = new window.QwertyHancock({
  id: 'keyboard',
  width: 900,
  height: 150,
  octaves: 4,
  startNote: 'C3',
  whiteNotesColour: 'white',
  blackNotesColour: 'black',
  hoverColour: '#f3e939'
})

var ctx = new AudioContext()
var preset = Hammond(ctx, '888000000')

keyboard.keyDown = function (note, frequency) {
  console.log('down', note, frequency)
  preset.noteOn(frequency)
}

keyboard.keyUp = function (note, frequency) {
  console.log('up', note, frequency)
  preset.noteOff(frequency)
}
