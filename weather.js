const keyId = "362909f0dd0d4ef676e2c050d99d6720";
   
   async function getWeatherData(city){
   const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyId}&units=metric`);
    const data = await result.json();
    console.log(data)
    return weatherData(data);
    
   }


let weatherData = async (data) =>{
   
    document.getElementById("location").innerHTML = data.name+",";
    
   
    document.getElementById("temp").innerHTML =  `${data.main.temp}  &#8451;`;
    
    document.getElementById("country").innerHTML = data.sys.country;
    document.getElementById("type").innerHTML = data.weather[0].description; 
    document.getElementById("image").innerHTML =  `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" >`
   
 }

 let search = document.getElementById("search");
 let input = document.getElementById("input");

 search.addEventListener(
    "click",
    function(event){
        getWeatherData(input.value)
        event.preventDefault();

        const date = new Date();

        const options = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
};

document.getElementById("date").innerHTML= `${date.toLocaleString('en-IN', options)}`;

    }
)




