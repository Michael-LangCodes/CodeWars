// The walker

// The walker starts from point O, walks along OA, AB and BC. When he is in C (C will be in the upper half-plane), what is the distance CO? What is the angle tOC in positive degrees, minutes, seconds?

// Angle tOA is alpha (here 45 degrees), angle hAB is beta (here 30 degrees), angle uBC is gamma(here 60 degrees).

// Task
// function solve(a, b, c, alpha, beta, gamma) with parameters

// a, b, c: positive integers in units of distance (stand for OA, AB, BC)
// alpha, beta, gamma: positive integers in degrees (positive angles are anticlockwise)
// returns an array:

// first element: distance CO (rounded to the nearest integer)
// then angle tOC with the third following elements:
// second element of the array: number of degrees in angle tOC (truncated positive integer)
// third element of the array: number of minutes in angle tOC (truncated positive integer)
// fourth element of the array: number of seconds in angle tOC (truncated positive integer)

//My Solution
function solve(a, b, c, alpha, beta, gamma) {  
    const degToRad = (input) => input*Math.PI/180
    let [ax,ay] = [a*Math.cos(degToRad(alpha)),a*Math.sin(degToRad(alpha))]
    let [bx,by] = [-b*Math.sin(degToRad(beta)),b*Math.cos(degToRad(beta))]
    let [cx,cy] = [-c*Math.cos(degToRad(gamma)),-c*Math.sin(degToRad(gamma))]
    let overallX = ax+bx+cx
    let overallY = ay+by+cy
    let overallDist = Math.round(Math.sqrt(overallX**2+overallY**2))
    let angle = 180-Math.atan(Math.abs(overallY)/Math.abs(overallX))*180/Math.PI
    let displayAngle = Math.floor(angle)
    let minutes = (angle-displayAngle)*60
    let displayMinutes = Math.floor(minutes)
    let seconds = (minutes-displayMinutes)*60
    let displaySeconds = Math.floor(seconds)
    return [overallDist,displayAngle,displayMinutes,displaySeconds]
}