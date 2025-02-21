// let arr = [ 2 , 7 , 9 , 5 , 2 , 0 , 5 ];
// let num = 7 ;

// function getNum(arr , num){
//     for( let i =0 ; i < arr.length ; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }

// getNum(arr,num);


//-----------------------------------------------------------------------------------------------------------


// let str = "abcdabcdefgggh";


// function getUnique (str ){
//     let ans = "";

//     for( let i =0 ; i <str.lenght ; i++){
//         let currChar = str[i];
//         if (ans.indexOf(currChar)== -1){
//             ans =+ currChar;
//         }
         

       
     
//     }
//     return ans;
// }

// getUnique(str);




//-----------------------------------------------------------------------------------------------------------


// let start = promt("enter start range");
// let end = promt("enter end rrange");

// function getNum(start , end){
//     let diff = end - start;
//     return Math.floor(Math.random * diff) + start;    
// }

// getNum(start,end);


//-------------------------------------------------------------------------------------------------------------

// let str = "apna collage";


// function countVowels(str) {
//     let count = 0;
//     for ( let i = 0 ; i<str.length ; i++){
//         if (
//             str.charAt(i) == 'a' ||
//             str.charAt(i) == 'e' ||
//             str.charAt(i) == 'i' ||
//             str.charAt(i) == 'o' ||
//             str.charAt(i) == 'u' 
//         ) {
//             count ++ ;
//         }

        
//     }

//     return count;

// }


//----------------------------------------------------------------------------------------------------------


let country = [ "australia ", "germany", "india","russia"];


function longestNameCountry (country) {

    let ansidx = 0;
    for (let i = 0 ; i < country.length , i++) {

        let ansLen = country[0].length ;
        let curLen = country[i].length;
        if( curLen >ansLen){
            ansidx = i ;
        }
    }
    return country[ansidx];
}

longestNameCountry(country);