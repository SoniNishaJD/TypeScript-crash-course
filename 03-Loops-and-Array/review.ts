let review:number[]=[5, 2.3, 5, 2];

let total: number=0;

for(let i=0; i<review.length; i++){
    console.log(review[i]);
    total += review[i];
}

let avarage: number = total/ review.length;
console.log("Review Avarage=" + avarage);