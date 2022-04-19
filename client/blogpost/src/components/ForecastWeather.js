import React from 'react';

const ForecastWeather = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>{Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}</p>
               </div>
           : null
           }
       </div>
   )
}

export default ForecastWeather;