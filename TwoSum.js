// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

nums = [2,7,11,15]
target = 9

// nums = [3,2,4]
// target = 6
function twoSums(nums,target){

    let previous = {}

    for(let i = 0; i <nums.length; i++){
        const current = nums[i]
        const needed = target - current
        const index2 = previous[needed]
        if(index2 != null){
            return [index2, i]
        }else{
            previous[current] = i
        }
    }

}

console.log(twoSums(nums,target))

