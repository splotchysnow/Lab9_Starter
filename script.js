class ButtonNotWorkingError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ButtonNotWorkingError"; // (2)
    }
}
class InputError_ extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "InputErrors"; // (2)
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();   
    try{
        var output = document.querySelector('output');
        var firstNum = document.querySelector('#first-num').value;
        var secondNum = document.querySelector('#second-num').value;
        var operator = document.querySelector('#operator').value;  
        
        if(isNaN(firstNum) | isNaN(secondNum)){
            throw "Not integer";
        }
        
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch(err){
        throw new InputError_("input is invalid.");
    }
    finally{
        console.log(firstNum, operator, secondNum, "=", output);
    }

});

// //Step 3 Explore try catch:
// try{
//     console.log("start of the try block");

//     console.log("end of the try block");
// }
// catch (err){
//     console.log("there is an error");
//     throw new ButtonNotWorkingError("An error excists, these button don't work");
// }
// finally{
//     output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
// }

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
//Notes: Access errorBtns by errorBtns[0,1,2,3]
//Step 2 Button names:
// 1. Console Log
// 2. Console Error
// 3. Console Count
// 4. Console Warn
// 5. Console Assert
// 6. Console Clear
// 7. Console Dir
// 8. Console dirxml
// 9. Console Group Start
// 10. Console Group End
// 11. Console Table
// 12. Start Timer
// 13. End Timer
// 14. Console Trace
// 15. Trigger a Global Error

//Step 2 set up the button names variables.
try{
    var consoleLog = errorBtns[0];
    var consoleError = errorBtns[1];
    var consoleCount = errorBtns[2];
    var consoleWarn = errorBtns[3];
    var consoleAssert = errorBtns[4];
    var consoleClear = errorBtns[5];
    var consoleDir = errorBtns[6];
    var consoleDirmxl = errorBtns[7];
    var consoleGroupStart = errorBtns[8];
    var consoleGroupEnd = errorBtns[9];
    var consoleTable = errorBtns[10];
    var consoleStartTimer = errorBtns[11];
    var consoleEndTimer = errorBtns[12];
    var consoleTrace = errorBtns[13];
    var consoleTriggerGError = errorBtns[14];
    TrackJS.track('Testing TrackJS!');
    var none_excistance_button = errorBtns[15];
    let buttons = [consoleLog,consoleError,consoleCount,consoleWarn,consoleAssert,consoleClear,consoleDir,
        consoleDirmxl,consoleGroupStart,consoleGroupEnd,consoleTable,consoleStartTimer,consoleEndTimer,consoleTrace,consoleTriggerGError];

    // for (let i = 0; i < buttons.length+1; i++){
    //     //Check if the button excists.
    //     if (buttons[i] == null){
    //         throw "Button error";
    //     }
    // }

    for (let i = 0; i < buttons.length; i++){
        //Check if the button excists.
        if (buttons[i] == null){
            throw "Button error";
        }
    }


}
catch(err){
    throw new ButtonNotWorkingError("An error excists, these button don't work");
}
finally{
    //add event listener to these buttons:
    consoleLog.addEventListener("click", function(){
        console.log("display messages");
    })

    //add event listener to these buttons:
    consoleError.addEventListener("click", function(){
        //function
        console.error("THIS IS AN ERROR");
    })

    //add event listener to these buttons:
    consoleCount.addEventListener("click", function(){
        //function
        console.count("This is console count");
    })
    //add event listener to these buttons:
    consoleWarn.addEventListener("click", function(){
        //function
        console.warn("This is console warn");
    })
    //add event listener to these buttons:
    consoleAssert.addEventListener("click", function(){
        //function
        console.assert(1==2, "assert ERROR!?");
    })
    //add event listener to these buttons:
    consoleClear.addEventListener("click", function(){
        //function
        console.clear();
    })
    //add event listener to these buttons:
    consoleDir.addEventListener("click", function(){
        //function
        console.dir(document.location);
    })
    //add event listener to these buttons:
    consoleDirmxl.addEventListener("click", function(){
        //function
        console.dirxml(document.location)
    })
    //add event listener to these buttons:
    consoleGroupStart.addEventListener("click", function(){
        console.log("going from this layer");
        console.group();
        console.log("to this layer");
    })
    //add event listener to these buttons:
    consoleGroupEnd.addEventListener("click", function(){
        //function
        console.log("exitting this layer");
        console.groupEnd();
        console.log("Now in this layer");
    })
    //add event listener to these buttons:
    consoleTable.addEventListener("click", function(){
        //function
        // console.table(["a","b","c"],[1,2,3],["g","e",'f']);
        console.table(["a","b","c"],[1,2,3]);
    })

    function f1(){
        f2();    
    }
    function f2(){
        f3();
    }
    function f3(){
        console.trace();
    }

    //add event listener to these buttons:
    consoleTrace.addEventListener("click", function(){
        //it traces where the function have been
        f1(); //should go from f3,f2,f1 to here YEP
    })


    //add event listener to these buttons:
    consoleStartTimer.addEventListener("click", function(){
        console.time();
    })

    //add event listener to these buttons:
    consoleEndTimer.addEventListener("click", function(){
        console.timeEnd();
    })
    //add event listener to these buttons:
    consoleTriggerGError.addEventListener("click", function(){
        //function
        throw new Error("gloabal ERROR!");
    })


}


