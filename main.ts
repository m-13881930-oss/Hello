input.onButtonPressed(Button.A, function () {
    radio.sendNumber(9)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(255)
    music.ringTone(988)
    basic.showLeds(`
        # . # . #
        . # . # .
        . # . # .
        . # . # .
        # # . # #
        `)
})
