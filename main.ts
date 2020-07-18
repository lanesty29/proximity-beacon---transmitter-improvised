radio.setGroup(2)
radio.setTransmitPower(2)
basic.forever(function () {
    radio.sendString("2")
    basic.pause(100)
})
