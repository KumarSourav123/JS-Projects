let height ;
let weight ;

const h = document.querySelector('#height');
const w = document.querySelector('#weight');
const bmi = document.querySelector("#result");
const show = document.querySelector("#show");

h.addEventListener('input',(e)=>{
    height = e.target.value;
    bmi.innerText = "Calculate";
    show.innerText = "";
});

w.addEventListener("input", (e) => {
    weight = e.target.value;
    bmi.innerText = "Calculate";
    show.innerText = "";
});

bmi.addEventListener('click',(e)=>{
    const result = calcBmi(height,weight);
    bmi.innerText = Math.round(result*100)/100;
    
    print(result);
})

function calcBmi(h,w){
    res = (w/(h*h));
    return res;
}

function print(res){
    if(res < 18.5){
        show.innerText = "You are UnderWeight";
    }
    else if(res < 24.9){
        show.innerText = "You are Normal";
    }
    else if(res < 29.9){
        show.innerText = "You are OverWeight";
    }
    else if(res<30){
        show.innerText = "You are Obesity";
    }
    else{
        show.innerText = "Please Check your Height and Weight Value";
    }
}
