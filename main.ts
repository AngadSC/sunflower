let photorecpt_2 = 0
let photocept_1 = 0
basic.forever(function () {
    photocept_1 = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P15, photocept_1)
})
basic.forever(function () {
    photorecpt_2 = pins.analogReadPin(AnalogPin.P2)
    pins.analogWritePin(AnalogPin.P14, photorecpt_2)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P4, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P4, pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    10,
    170
    ))
})
