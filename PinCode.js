
console.log("Welcome to Pin Code Js Problem");

class PinCode{
    checkPatternNumber(data){
        
        var pattern=RegExp("[0-9]{6}[a-z]?");
        
        if(pattern.test(data)){
            console.log("valid code");
        }else{
            console.log("invalid code");
        }

    }
}

const checkPattern=new PinCode();
checkPattern.checkPatternNumber("431001hj");