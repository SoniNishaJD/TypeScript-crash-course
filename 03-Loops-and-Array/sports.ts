let sportsOne: string[] = ['Cricket', 'batminton', 'Goals'];

// for(let i=0; i < sportsOne.length; i++){
//     console.log(sportsOne[i]);               //Traditional
// }

//Lets use simplified for loop

for (let tempSport of sportsOne) {

    if (tempSport == 'Cricket') {
        console.log(tempSport + "<< My Fav");
    }
    else{
        console.log(tempSport)
    }
       
}