import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GalfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGalfCoach = new GolfCoach();

//Declare an array for coaches...initially empty

let theCoaches: Coach[] =[];

//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGalfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}