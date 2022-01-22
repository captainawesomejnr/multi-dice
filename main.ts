radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > Dice) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        control.reset()
    } else if (receivedNumber == Dice) {
        basic.showIcon(IconNames.Asleep)
        control.reset()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 16)
    if (Dice == 11) {
        basic.showString("A")
    } else if (Dice == 12) {
        basic.showString("B")
    } else if (Dice == 13) {
        basic.showString("C")
    } else if (Dice == 14) {
        basic.showString("D")
    } else if (Dice == 15) {
        basic.showString("E")
    } else if (Dice == 16) {
        basic.showString("F")
    } else {
        basic.showNumber(Dice)
    }
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(202)
