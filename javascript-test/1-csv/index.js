const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

const text = textarea.value.split("\n")
let obj = []
for(let i= 0; i<text.length;i++){
    obj[i] = {neptun: text[i].split(',')[0],javascript: parseInt(text[i].split(',')[1]),php: parseInt(text[i].split(',')[2])}
}
button.addEventListener("click", onBtnClick)

function onBtnClick(){
    task1.innerHTML = obj.filter(item => item.javascript < 12).length;
    task2.innerHTML = obj.map(item => item.javascript).reduce((a,b) => a+b) / obj.length;
    task3.innerHTML = Math.max(...obj.map(item => item.javascript + item.php))
    task4.innerHTML = obj.find(item => item.javascript < 12 && item.php < 12).neptun;
    let valami = obj.some(item => item.javascript > 23 && item.php > 23 )
    if(valami){
        task5.innerHTML = "Yes"
    }else{
        task5.innerHTML = "No"
    }
}