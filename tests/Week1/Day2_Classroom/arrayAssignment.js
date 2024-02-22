//Classroom:2
//------------
//1) Find the number of occurances.  // Easy
//const nums = [2,4,5,2,1,2];
//const k = 2
// output >> 3
//hint: loop through the array and compare the k with array index value and if matches, increase the count

const nums = [2,3,5,2,1,2]
const k = 2
let count = 0
for(let i = 0;i<nums.length;i++){
    if(nums[i]==k)
    count++
}
console.log(`Number of occurances of 2 is : ${count}`)