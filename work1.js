function sumArray(nums){
    let sum = 0;

    nums.forEach(num =>{
        sum += num;
    });

    return sum;
}



console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));