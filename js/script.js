 let lcd = document.querySelector("#lcd")
let btnClearLastAction = document.querySelector("#btn-clear-last-action")
let btnPn = document.querySelector("#btn-pn")
let btnClear = document.querySelector("#btn-clear")
let btnBackSpace = document.querySelector("#btn-back-space")
let btnPoint = document.querySelector("#btn-point")
let btnDiv = document.querySelector("#btn-div")
let btnMul = document.querySelector("#btn-mul")
let btnMinus = document.querySelector("#btn-minus")
let btnPlus = document.querySelector("#btn-plus")
let btnEqual = document.querySelector("#btn-equal")
let btnReminder = document.querySelector("#percent")
last_operation_history = document.getElementById("last_operation_history");
let history = document.querySelector("#history")
let percent = document.querySelector("#percent")
let squareRoot = document.querySelector("#square-root")
let powerTwo = document.querySelector("#power-two")
let divisionOne = document.querySelector("#division-one")



let btnNumbers = document.querySelectorAll(".btn-number")


let setPoint = false;
let number1,number2,result;
let setResult = false;
let setPlus = false;
let setMinus = false;
let setMul = false;
let setDiv = false;
let sum = []
let last_button ;
let calc_operator;
op = ["+", "-", "/", "*"];



btnNumbers.forEach((item) => {
    item.addEventListener("click", (e) => {
        if(lcd.textContent == "0.0"){
            lcd.textContent = e.target.textContent; 
            
        }else{
            lcd.textContent += e.target.textContent;
        }
    })
    
})


btnPlus.addEventListener("click" ,(e) => {
    number1 = Number(lcd.textContent);
    lcd.textContent = "0.0";
    op = "+";
    })

btnMinus.addEventListener("click" ,(e) => {
    number1 = Number(lcd.textContent);
    lcd.textContent = "0.0";
    op = "-";
})
btnMul.addEventListener("click" ,(e) => {
    number1 = Number(lcd.textContent);
    lcd.textContent = "0.0";
    op = "*";
})
btnDiv.addEventListener("click" ,(e) => {
    number1 = Number(lcd.textContent);
    lcd.textContent = "0.0";
    op = "/";
})

btnClearLastAction.addEventListener('click' , (e) => {
    lcd.textContent = "0.0";
})



btnEqual.addEventListener("click", (e) => {
    if (setResult == false) {//هیچ ریزالتی ست نشده براش
        number2 = Number(lcd.textContent);
    } else {
        number1  = Number(lcd.textContent);//عدد روی ال سی دی رو به عنوان نامبر یک می گیره.وعدد دوم  همون عدد دوم هست.
    }
    
    switch(op){
        case "+":
            result = number1 + number2
        break;
        case "-":
            result = number1 - number2;    
            break;
        case "*":
            result = number1 * number2;    
            break;
        case "/":
            result = number1 / number2;    
            break;
        case "%":
            result = Math.floor(number1 / number2);    
            break;
    }
    lcd.textContent = result;
    setResult = true;
})

btnClear.addEventListener("click", (e) => {
    lcd.textContent = "0.0";
    setPoint = false;
    setResult = false ;
    number1 = 0 ;
    number2 = 0 ;
})

btnBackSpace.addEventListener("click", (e) => {
    let len = lcd.textContent.length;

    let lastDigit =lcd.textContent.substring(len-1,len)
    if(lastDigit == "."){
        setPoint=false;
    }

    if(len > 1){
        lcd.textContent = lcd.textContent.substring(0, len-1);//اخرین مقدار روی صفحه نمایش رو نشون نمی ده یعنی اخری رو پاک می کنه
    }else{
        lcd.textContent = "0.0";
    }
})

btnPn.addEventListener("click" ,(e) => {
   
    lcd.textContent = lcd.textContent * -1;
})

btnPoint.addEventListener("click" ,(e) => {
    if(setPoint == false){
        lcd.textContent += ".";
        setPoint = true;//یعنی بعد از گذاشتن پوینت ست پوینت ترو بشه یعنی دفعات بعد فالز نباشه که بیاد پوینت رو نمایش بده.
    }
    
})

squareRoot.addEventListener("click", (e) => {
    lcd.textContent = Math.sqrt(lcd.textContent)
})

powerTwo.addEventListener("click",(e) => {
    lcd.textContent = Math.pow(lcd.textContent,2)
})

divisionOne.addEventListener("click",(e) => {
    lcd.textContent = 1/(lcd.textContent)
})

percent.addEventListener("click",(e) => {
    number1 = Number(lcd.textContent);
    lcd.textContent = "0.0";
    op = "%";

})