let u = 0
basic.forever(function () {
    u = input.compassHeading()
    if (u > 315 || u < 45) {
        basic.showString("N")
    } else {
        if (u > 45 && u < 135) {
            basic.showString("E")
        } else {
            if (u > 135 && u < 225) {
                basic.showString("S")
            } else {
                basic.showString("W")
            }
        }
    }
})
