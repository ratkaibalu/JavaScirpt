const canvas  = document.querySelector('canvas')
const ctx     = canvas.getContext('2d')
const slider  = document.querySelector("input[type=range]");
const button  = document.querySelector('#draw')
const select  = document.querySelector('select')

const rect = document.querySelector('#rect')
const rectX = document.querySelector("#rect-x")
const rectY = document.querySelector('#rect-y');
const rectW = document.querySelector("#rect-w")
const rectH = document.querySelector("#rect-h")

const circ = document.querySelector('#circ')
const circX = document.querySelector("#circ-x")
const circY = document.querySelector("#circ-y")
const circR = document.querySelector("#circ-r")

const line = document.querySelector('#line')
const lineAX = document.querySelector("#line-ax")
const lineAY = document.querySelector("#line-ay")
const lineBX = document.querySelector("#line-bx")
const lineBY = document.querySelector("#line-by")

ctx.lineWidth = 4
ctx.strokeStyle = 'black'

button.addEventListener("click", onButtonClick)

function onButtonClick(){
    if(select.value ==="rect"){
        ctx.beginPath();
        ctx.strokeRect(rectX.value,rectY.value,rectW.value, rectH.value)
    }else if(select.value === "circ"){
        ctx.beginPath();
        ctx.arc(circX.value,circY.value,circR.value,0,2 * Math.PI)
        ctx.stroke();
    }else if(select.value === "line"){
        ctx.beginPath();
        ctx.moveTo(lineAX.value,lineAY.value)
        ctx.lineTo(lineBX.value,lineBY.value)
        ctx.stroke();
    }
}

select.addEventListener("change", onSelectChange)

function onSelectChange(){
    if(select.value ==="rect"){
        rect.hidden = false;
        circ.hidden = true;
        line.hidden = true;
    }else if(select.value ==="circ"){
        rect.hidden = true;
        circ.hidden = false;
        line.hidden = true;
    }else if(select.value ==="line"){
        rect.hidden = true;
        circ.hidden = true;
        line.hidden = false;
    }
}

//slider.addEventListener("input", onInput)

