import React, { Component } from 'react';
import { useState } from 'react'
import fire from './config/Fire';


const api = {
  key: "2e967a06c90ff16ac5be7261e5f206db",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}


const Home = (props) => {


  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // search function
  const search = evt => {
    // whatever is in the search bar is put into query upon enter
    if (evt.key === "Enter") {
      // putting together the api call 
      fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // reset the query when all is done
          setQuery('');
          // console.log(result);
        });
    }
  }
  
  // function to create a date
  const createDate = (d) => {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    // concatenate values 
    let result = `${day} ${date} ${month} ${year}`;

    return result;
  }


//   const logout = () => {
//     fire.auth().signOut();
// }


  return (
    <div className="App app-background">
    <main>
      <div className='title'>
        Weather App
      </div>

      <div className='search-box'>
        <input 
        type='text' 
        className='search-bar' 
        placeholder='Search' 
        onChange={e => setQuery(e.target.value)} 
        value={query} 
        onKeyPress={search}/>
      </div>

      {/* if the weather has not been determined yet */}
      {(typeof weather.main != "undefined") ? (
        <div> 
          <div className="location-box">
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{createDate(new Date())}</div>
          </div>

          <div className='weather-box'>
            {/* had to convert to standard instead of metric  */}
            <div className='temperature'>{Math.round((weather.main.temp) * 1.8 + 32)}°F</div>
            <div className='weather-type'>{weather.weather[0].main}</div>
          </div>
        </div>
        // else nothing 
        ) : ('')}
    </main>
    </div>
  );

  }

  export default Home;