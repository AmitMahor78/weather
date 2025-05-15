 async function getWeather() {
            const city = document.getElementById("city").value;
            const apiKey = "fbefb2304db4ae6cdd9a43218a90d252"; // Replace with your API key
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(url);
            const data = await response.json();

            document.getElementById("weather").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Wind: ${data.wind.speed}</p>
                <p>Timezone: ${data.timezone}</p>
                <p>Country: ${data.sys.country}</p>
            `;
             console.log(url);
        }
       