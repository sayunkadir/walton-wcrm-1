// //1 AnaToVori


// function anaToVori(ana) {
//     const result = ana / 16;
//     return result;
// }
// vori = anaToVori(32)
// // console.log('Amount of Vori is', vori)


// // 2 PandaCost


// function pandaCost(num1, num2, num3) {
//     const costOfSingara = 7;
//     const costOfSamosa = 10;
//     const costOfJelapi = 15;
//     const numberOfSingara = num1 * 7;
//     const numberOfSamosa = num2 * 10;
//     const numberOfJelapi = num3 * 15;
//     const total = numberOfJelapi + numberOfSamosa + numberOfSingara;
//     return total;
// }
// const food = pandaCost(1, 1, 1)
// console.log("I ate", food, "taka worth of food")


// // 2 PicnicBudget


// function picnicBudget(number) {
//     const numberOfTkFor100 = 5000;
//     const numberOfTkFor200 = 4000;
//     const numberOfTkFormore = 3000;
//     if (number <= 100) {
//         let for100People = number * numberOfTkFor100;
//         return for100People;
//     }
//     else if (number <= 200) {
//         let for100People = 100 * numberOfTkFor100;
//         const numberFor200 = number - 100;
//         let for200People = numberFor200 * numberOfTkFor200;
//         const total = for100People + for200People;
//         return total;
//     }
//     else {
//         let for100People = 100 * numberOfTkFor100;
//         let for200People = 100 * numberOfTkFor200;
//         const numberForMore = number - 200;
//         const forMorePeople = numberForMore * 3000;
//         const total2 = for100People + for200People + forMorePeople;
//         return total2;

//     }

// }
// const notun = picnicBudget(300)
// console.log("blah blah blah", notun)


// 4 oddFriend


// function oddFriend(names) {
//     for (i = 0; i < names.length; i++) {
//         element = names[i]
        
//     }
//     return odd;
// }
// var ian = ['ilan', 'ali', 'raihan', 'naina', 'prince', 'alu'];
// var print = oddFriend (ian)
// console.log(print)

 function isEvan(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const evan = 22;
const evan2 = isEvan(evan)
console.log(evan2)