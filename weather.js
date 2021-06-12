function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "05805459dba6297e08a0c98134bd9b33";

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = Math.round(data.main.temp)
        temperature.innerHTML = temp + "°C";
        location.innerHTML =
          data.name //+ " (" + latitude + "°, " + longitude + "°)";//
        description.innerHTML = data.weather[0].main;


        // background changer

        var images = [
        {
            // default
            url: 'bg.gif'
        },
        {
            condition: ['Clouds'],
            url: 'bg2.gif',
        },
        {
            condition:  ['Rain', 'Drizzle'],
            url: 'bg.gif'
        },
        {
            condition: ['Clear'],
            url: 'bg3.gif'

        }];

        var url;
        for (var i in images) {
            if (!images[i]["condition"] || images[i]["condition"].indexOf(description.innerHTML) > -1) {
                url = images[i]["url"];
            }
        }
        $('body').css('background-image', 'url(/images/' + url + ')');

        //title changer
        var emoji = [
          {
              // default
              url: 'joshuaclark.co.uk'
          },
          {
              condition: ['Clouds'],
              url: '☁️ ☁️ ☁️ ☁️'
          },
          {
              condition:  ['Rain', 'Drizzle'],
              url: '☔ ☔ ☔ ☔'
          },
          {
              condition: ['Clear'],
              url: '☀️ ☀️ ☀️ ☀️'

          }];

          
          var url;
          for (var i in emoji) {
              if (!emoji[i]["condition"] || emoji[i]["condition"].indexOf(description.innerHTML) > -1) {
                  url = emoji[i]["url"];
              }
          }
          let title = url;
          document.title = title;
          position = 0;
          function scrolltitle() {
          document.title = title.substring(position, title.length) + title.substring(0, position); 
          position++;
          if (position > title.length) position = 0;
          titleScroll = window.setTimeout(scrolltitle,170);
          }
          scrolltitle();
            });
          }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
    }

getWeather();
