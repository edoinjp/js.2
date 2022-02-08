let array = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

for (let i = 0 ;  i < array.length; i++) {
    const element = array[i];
    if ( array[i] > 0){
        console.log(array[i]);

    }
    
    
}



function numbers(...num){
    let numberssum = 0;

    for(let item of num){
        numberssum = numberssum + item;
       
    }
    return numberssum;
}

let result = numbers (10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);





let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

function user1(obj) {
    if (obj.isloggedin == true) {
        return obj.firstname+ " " + obj.lastname
    }
    return false
}

let result = user1(user);
console.log(result);
   


function getmaxvalue (numbers){
    let maxvalue  = 0;

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        
        if (element > getmaxvalue) {
            maxvalue = element;

        }
    }
    return maxvalue;
}

console.log(getmaxvalue([20,40,21,42,26,15,29,32]));
