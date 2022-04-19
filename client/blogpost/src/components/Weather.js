import React, {useState} from 'react';
import ForecastWeather from './ForecastWeather';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Weather = () => {
   const [responseObj, setResponseObj] = useState({});
   let [city, setCity] = useState('');
   let [unit, setUnit] = useState('imperial');

   const uriEncodedCity = encodeURIComponent(city);

   function getWeather(e) {
        e.preventDefault();

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }
        };
        
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, options)
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
        .catch(err => console.error(err));
   }

   return (
    <div>
        <Form onSubmit={getWeather}>
                <Form.Control
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <Form.Label>
                    <Form.Check
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </Form.Label>
                <Form.Label>
                    <Form.Check
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </Form.Label>
                <Button type="submit">Get Forecast</Button>
            </Form>
        <ForecastWeather
               responseObj={responseObj}
        />
    </div>
   )
}

export default Weather;
