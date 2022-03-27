radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > Dice) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        control.reset()
    } else if (receivedNumber == Dice) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(2000)
        control.reset()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 26)
    if (Dice == 1) {
        basic.showString("A")
    } else if (Dice == 2) {
        basic.showString("B")
    } else if (Dice == 3) {
        basic.showString("C")
    } else if (Dice == 4) {
        basic.showString("D")
    } else if (Dice == 5) {
        basic.showString("E")
    } else if (Dice == 6) {
        basic.showString("F")
    } else if (Dice == 7) {
        basic.showString("G")
    } else if (Dice == 8) {
        basic.showString("H")
    } else if (Dice == 9) {
        basic.showString("I")
    } else if (Dice == 10) {
        basic.showString("J")
    } else if (Dice == 11) {
        basic.showString("K")
    } else if (Dice == 12) {
        basic.showString("L")
    } else if (Dice == 13) {
        basic.showString("M")
    } else if (Dice == 14) {
        basic.showString("N")
    } else if (Dice == 15) {
        basic.showString("O")
    } else if (Dice == 16) {
        basic.showString("P")
    } else if (Dice == 17) {
        basic.showString("Q")
    } else if (Dice == 18) {
        basic.showString("R")
    } else if (Dice == 19) {
        basic.showString("S")
    } else if (Dice == 20) {
        basic.showString("T")
    } else if (Dice == 21) {
        basic.showString("U")
    } else if (Dice == 22) {
        basic.showString("V")
    } else if (Dice == 23) {
        basic.showString("W")
    } else if (Dice == 24) {
        basic.showString("X")
    } else if (Dice == 25) {
        basic.showString("Y")
    } else {
        basic.showString("Z")
    }
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(202)
