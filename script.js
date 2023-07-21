let heighElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement= document.querySelector(".js-bmi");
let running = document.querySelector(".running")

formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    let height = heighElement.value;
    let weight = weightElement.value;

    let bmi = weight / ((height /100 )**2)
    
    bmiElement.innerText = ` ${bmi.toFixed(2)}`;

    console.log(bmi);
   
    if(bmi>10 && bmi<30) {
        running.innerText = "Możesz biegać"
    } else {
        if(bmi>=30 && bmi<=32 ) {
        running.innerText = "Uważaj, marsz i wolny krótki bieg"
        } else {
        if(bmi >32)
        running.innerText = "Lepiej maszeruj"
        }
    };

});