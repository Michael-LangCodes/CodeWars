// Braking distance d1 is the distance a vehicle will go from the point when it brakes to when it comes to a complete stop. It depends on the original speed v and on the coefficient of friction mu between the tires and the road surface.

// The braking distance is one of two principal components of the total stopping distance. The other component is the reaction distance, which is the product of the speed and the perception-reaction time of the driver.

// The kinetic energy E is 0.5*m*v**2, the work W given by braking is mu*m*g*d1. Equalling E and W gives the braking distance: d1 = v*v / (2*mu*g) where g is the gravity of Earth and m the vehicle's mass.

// We have v in km per hour, g as 9.81 m/s/s and in the following we suppose that the reaction time is constant and equal to 1 s. The coefficient mu is dimensionless.

// Tasks:
// The first one is to calculate the total stopping distance in meters given v, mu (and the reaction time t = 1).

// dist(v, mu) -> d = total stopping distance

// The second task is to calculate v in km per hour knowing d in meters and mu with the supposition that the reaction time is still t = 1.

// speed(d, mu) -> v such that dist(v, mu) = d.

//Solution
function dist(v, mu) {
    const g = 9.81;
    const t = 1;

    // convert km/h → m/s
    const vms = v * 1000 / 3600;

    const reaction = vms * t;
    const braking = (vms * vms) / (2 * mu * g);

    return reaction + braking;
}

function speed(d, mu) {
    const g = 9.81;
    const a = 1 / (2 * mu * g);

    const vms = (-1 + Math.sqrt(1 + 4 * a * d)) / (2 * a);

    // m/s → km/h
    return vms * 3.6;
}