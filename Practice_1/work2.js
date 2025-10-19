function findMax(nums){
    let max = nums[0];

    nums.forEach(num =>{
        if (max < num){
            max = num;
        }
    });

    return max;
}


console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));