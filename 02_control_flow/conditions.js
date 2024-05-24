// ther are three conditional statement in js 
// if , else if , if else nested , switch 

// if (condition)  {....}
// else if (condtion) {...}
// else {....}

let a=20 ,b="20"

if (a>b){
    console.log("a is greater than b")

}
else if (a<b){
    console.log("a is less than b")

}
else if (a===b){
    console.log(" a and b are eqaul in value as type ")
}

else if (a==b){
    console.log(" a and b are equal as value")
}

else {
    console.log('invalid ')
}

let time=10 , greeting;

if (time <10){
    greeting="Good Morning"
    console.log(greeting)
} else if( time > 10 & time<4){
    greeting="good Afternoon"
    console.log(greeting)
}
else{
    console.log("Good Evening")
}


let password =3;

if (password===8){
    console.log("welcone")
} else if(password<=8){
    console.log("Password is too short")
}else if(password >=8){
    console.log("too long password")
    console.log("password should be 8 ")
}else{
    console.log("plz provide valid password ")
}


// switch statement 
/*
switch(expression){
    case 1:
        statement 
        break;
    case 2:
        statement 
        break ;

    
}

*/

let x=3 ,bulb

switch(x){
    case 0:
        bulb="off"
        console.log(bulb)
        break;
    case 1:
        bulb="On"
        console.log(bulb)
        break;
    default:
        bulb='no value found'
        console.log(bulb)

}


let day = 'monday'

switch (day){
    case 'monday':
        console.log('today is monday')
        break;
    case 'tuesday':
        console.log('Today is tuesday')
        break;
    case 'wednesday':
        console.log('today is wednesday')
        break;
    default:
        console.log('IDK ')
}