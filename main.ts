input.onButtonPressed(Button.A, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showNumber(randint(1, 6))
    basic.pause(100)
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (Math.randomBoolean()) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(135)
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(311, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
})
basic.forever(function () {
	
})
