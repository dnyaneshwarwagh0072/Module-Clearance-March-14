



let weather =  {


    "apiKey": "090a46aceaba5a812193672cda6ca56b" ,




    fetchWeather: function (city) {
                                   fetch(
                                          "https://api.openweathermap.org/data/2.5/weather?q=" 
                                            + city 
                                            + "&units=metric&appid=" 
                                            + this.apiKey
                                        )
                                            .then((response) => response.json())
                                            .then((data) => this.displayWeather(data));
            
                                    },





    displayWeather: function(data){
                                        const { name } = data;
                                        const { icon, description } = data.weather[0] ; // because "weather" in in array in APikey.md  so we are using weather[0]
                                        const { temp, humidity  } = data.main ;  // we are fetching object.key from ApiKey.md file
                                        const { speed } = data.wind ;

                                        // console.log(name,icon,description,temp,humidity,speed) // now i am testing it in console 

                                        const city2 =  document.querySelector(".city");
                                        city2.innerText = `Weather in ${name}`

                                        const icon2 =  document.querySelector(".icon");
                                        icon2.src = "https://openweathermap.org/img/wn/" + icon + ".png";  
                                        // icon2.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";   // @2x --> ye png ko dugna bda dikhane ke liye hai

                                        const description2 =  document.querySelector(".description");
                                        description2.innerText = description ;

                                        const temp2 =  document.querySelector(".temp");
                                        temp2.innerText = temp + "°C" ;

                                        const humidity2 =  document.querySelector(".humidity");
                                        humidity2.innerText = " Humidity = "  + humidity +  "%" ;

                                        const wind2 =  document.querySelector(".wind");
                                        wind2.innerText = " Wind Speed = "  + speed +  "km/h" ;





                                        
                                        //is coding se weather ke sath visibility ht jayega to uska hidden
                                        //property bhi khatm ho jayega 
                                        // kyuki vo selector and property keuse me hai ex:-  .weather.loading
                                        const visible = document.querySelector(".weather"); 
                                        const visibleClassList = visible.classList;
                                        visibleClassList.remove("loading");
                                        // document.querySelector(".weather").classList.remove("loading")





                                        // ab change krenge jis city ko search krenge bavkground me usi city ka photo aayega
                                        const bodyChange = document.body;
                                        const bodyChangeStyle = bodyChange.style;
                                        bodyChangeStyle.backgroundImage = "src('https://source.unsplash.com/1600*900/?" + name + "')";
                                        // document.body.style.backgroundImage = "src('https://source.unsplash.com/1600*900/?" + name + "')";
    
                                     },


    search: function(){
                        const searchBar2 = document.querySelector(".search-bar");
                        const searchBar2Value = searchBar2.value;
                        this.fetchWeather(searchBar2Value);
                        // this.fetchWeather( document.querySelector(".search-bar").value);
                         }

}






const twoSelect = document.querySelector(".search button");
twoSelect.addEventListener('click' , function(){
                                                     weather.search();
                                                } )







const searchBarKeyUp = document.querySelector(".search-bar");
searchBarKeyUp.addEventListener('keyup' , function(event){
                                                            if(event.key == "Enter"){
                                                                                        weather.search();  // yaha pr weather object ka name hai aur search uska key name hai jiska value ek function hai 
                                                                                       }
                                                        } )



weather.fetchWeather("Patna");

