/*Creating my functions for Calculator*/
function add(a,b){
    return (a + b);
}
function subtract(a,b){
    return (a-b);
}
function multiply(a,b){
    return (a * b);
}
function divide(a,b){
    if (b != 0){
        return (a/b);
    }
    else{
        return "can't divide by 0. Invalid entry."
    }
}
