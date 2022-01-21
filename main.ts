radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > Dice) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        control.reset()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 2)
    if (Dice == 1) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . .
            # . # # #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(202)
