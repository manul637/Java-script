// let arr = [ 1 , 2, 3, 4 , 5]


// let print = function(el){
//     console.log(el);

// };

// arr.forEach(print);

//ALTER-------------------

// arr.forEach(function(el){
//     console.log(el);
// });

//ALTER---------------------

// arr.forEach((el)=> {
//     console.log(el);
// });


// ----------------------------------------------------------------------------------------------

// let arr = [
//     {
//         name : "krish" ,
//         rollno : 34,
//     },
//     {
//         name : "manul",
//         rollno : 49,
//     },
//     {
//         name : "bhumi",
//         rollno : 3
//     },
//     {
//         name : "gulshan",
//         rollno : 13,
//     }

// ];

// arr.forEach((student) => {

//     // console.log(student);

//     // console.log(student.rollno);

//     // console.log(student.name);

// })


//---------------------------------------------------------------------------- MAP FUNCTION --------------------------------------------


let num = [ 1, 2, 3, 4];

let double = num.map((el) =>{
    return el*2;
});