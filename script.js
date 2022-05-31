//making sure js is linked 
console.log("howdy")

let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let cityName = document.querySelector('.cityName');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');
// let uvIndex = document.querySelector('.uvIndex');

let save = function(cityName){
    localStorage.setItem(cityName, cityName)

}

//enabling button function and fetching api
button.addEventListener('click', function(){
     save(inputValue.value)
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=848af10a7205a0e4499557d2c2f3acfc')
.then(response => response.json())
.then(data =>{
    let cityValue = data['name'];
    let tempValue = data['main']['temp'];
    let windValue = data['wind']['speed'];
    let humidityValue = data['main']['humidity'];
    // let uvIndexValue = data['main']['uvi']

    cityName.textContent = cityValue;
    temp.textContent = "Temp: " + tempValue + " F";
    wind.textContent = "Wind: " + windValue + " MPH";
    humidity.textContent = "Humidity: " + humidityValue + "%";
    // uvIndex.innerHTML = uvIndexValue;
})

.catch(err => alert("Enter a valid city name please "))
})


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let button =document.createElement("button")
    button.textContent = key
    document.querySelector('.btn1').appendChild(button);
}
  