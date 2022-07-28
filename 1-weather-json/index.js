const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

//a
button.addEventListener('click', onClick)
function onClick() {
    let obj = JSON.parse(textarea.innerHTML)
    console.log(obj);
    //b
    let dt;
    for(let i=0; i < obj.daily.length;i++){
        if(obj.daily[i].wind_deg < 180+45 && obj.daily[i].wind_deg > 180-45 &&  obj.daily[i].weather[0].main ==="Clouds"){
            dt = obj.daily[i].dt;
        }
    }
    task1.innerHTML = dt;
    //task1.innerHTML = obj.daily.find(e=> 180-45 < e.wind_deg && e.wind_deg < 180+45 && e.weather[0] === "clouds")

    //c
    const min = obj.daily[0].temp.max;
    for(let i=0; i< obj.daily.length;i++){
        if(min > obj.daily[i].temp.max){
            min = obj.daily[i].temp.max;
        }
    }
    task2.innerHTML = min;

    //d
    task3.innerHTML = obj.daily.every(e => e.pressure > 1010)

    //e
    //task4.innerHTML = obj.daily.feels_like.reduce((a,b)=> a.day + b.day) / 
    let hossz = obj.daily.length
    let össz = 0;
    for(let i=0;i < hossz;i++){
        össz += obj.daily[i].feels_like.day;
    }
    task4.innerHTML = össz / hossz;

    //f
    let szeles = 0;
    for(let i=0; i< obj.hourly.length;i++){
        if(obj.hourly[i].wind_speed > 3){
            szeles += 1;
        }
    }
    task5.innerHTML = szeles;
}


