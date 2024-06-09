// String transformation

const sumContigoursSubArray = (arr, targetSum) => {

    let currentSum = 0;
    let i = 0;

for(let y = 0; i < arr.length; y++){
    currentSum += arr[y];

       while(currentSum > targetSum && i <= y){
              currentSum -= arr[i];
              i++;
       }
// Check if we found the target sum
       if(currentSum === targetSum){
        return true;
       }

}

return false;

};


console.log(sumContigoursSubArray([4, 2, 7, 1, 9, 5], 17)); 