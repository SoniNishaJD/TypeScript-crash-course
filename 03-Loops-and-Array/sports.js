var sportsOne = ['Cricket', 'batminton', 'Goals'];
// for(let i=0; i < sportsOne.length; i++){
//     console.log(sportsOne[i]);               //Traditional
// }
//Lets use simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == 'Cricket') {
        console.log(tempSport + "<< My Fav");
    }
    else {
        console.log(tempSport);
    }
}
