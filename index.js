
function Hammond (ctx, presetObject) {
  if (arguments.length === 1) return function (p) { return Hammond(ctx, preset) }

  var preset = { value: presetObject }
  preset.notes = {}
  preset.noteOn = function (freq, volume) {
    preset.noteOff(freq)
    var osc = ctx.createOscillator()
    osc.frequency.value = freq
    osc.connect(ctx.destination)
    preset.notes[freq] = osc
    osc.start(0)
  }

  preset.noteOff = function (freq) {
    if (!preset.notes[freq]) return
    preset.notes[freq].stop(0)
  }
  return preset
}

window.Hammond = Hammond
