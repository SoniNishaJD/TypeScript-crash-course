var review = [5, 2.3, 5, 2];
var total = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
var avarage = total / review.length;
console.log("Review Avarage=" + avarage);
