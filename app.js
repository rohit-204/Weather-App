

let weather={
    apiKey:"01828516afbf3f660019472cb40469c2",
    fetchWeather: function(cityName){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`)
    .then((response)=>response.json())
    .then((data)=>console.log(data));} ,
    displayWeather:function(data){
        const {name}=data;
        const {description,icon}=data.weather[0];
        const{temp,humidity}=data.main;
        const {speed}=data.wind;
        document.querySelector('.city').textContent="Weather in" +name;
        document.querySelector('.icon').src=`https://openweathermap.org/img/wn//${icon}.png`;
        document.querySelector('.description').textContent=description;
        document.querySelector('temp').textContent="Temperature : "+ temp;
        document.querySelector('humidity').textContent="Humidity : "+ humidity;
        document.querySelector('.speed').textContent="Wind Speed : "+ speed +"kmph";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.searchbar').value);
        console.log(document.querySelector('.searchbar').value);
    },
};
 

const final=document.querySelector('.btnn');

final.addEventListener('click',weather.search());
final.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        weather.search();
    }
})
weather.fetchWeather('lucknow');