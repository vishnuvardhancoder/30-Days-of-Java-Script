//switch statements are used to perform different actions based on different conditions.

/*switch(expression){
    case x:
        Code 
        return
    case y:
        code 
        return
    default:
        code
}*/

let day = "Monday"
switch(day){
    case "Monday":
        console.log("It is Monday");
        break;
    case "Tuesday":
        console.log("It is Tuesday");
        break;
    case "Wednesday":
        console.log("It is Wednesday");
        break;
    case "Thursday":
        console.log("It is Thursday");
        break;
    case "Friday":
        console.log("It is Friday");
        break;
    case "Saturday":
        console.log("It is Saturday");
        break;
    case "Sunday":
        console.log("It is Sunday");
        break;
    default:
        console.log("Give correct days..")
}