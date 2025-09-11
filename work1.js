function sumArray(nums){
    let sum = 0;
    for(let i=0; i < nums.length; i++){
        sum += nums[i];
    }
    console.log(sum);
    return sum;
}


sumArray([1, 2, 4, 3]);
