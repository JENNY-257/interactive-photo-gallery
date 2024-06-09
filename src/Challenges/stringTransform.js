// String transformation
 const reverseString = (str) => {
    // check if the length of the string is divisible by 3
    if(str.length%3==0){
        return  str.split('').reverse().join('');
    }
    // check if the length of the string is divisible by 5

    else if(str.length%5==0){
        return str.split('').map(char => char.charCodeAt(0)).join('');
    }
    // replace each character with ascii code

    else if(str.length%15==0){
        return str.split('').reverse().map(char =>
               char.charCodeAt(0)).join('');
    }
    // if none return the original string
    else{
        return str;
    }

 };