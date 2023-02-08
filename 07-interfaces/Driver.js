"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GalfCoach_1 = require("./GalfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGalfCoach = new GalfCoach_1.GolfCoach();
//Declare an array for coaches...initially empty
let theCoaches = [];
//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGalfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
