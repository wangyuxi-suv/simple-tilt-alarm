input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("G A B B B A G F ", 120), music.PlaybackMode.UntilDone)
})
