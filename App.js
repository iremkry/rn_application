import React, { useEffect, useState } from "react";
import { ScrollView, ImageBackground } from "react-native";
import ForecastSearch from "./components/ForecastSearch";
import CurrentForecast from "./components/CurrentForecast";
import DailyForecast from "./components/DailyForecast";
import styled from "styled-components/native";
import bgImg from "./assets/4.png";
import { API_KEY, GOOGLE_KEY } from "@env";


const App = () => {
  const [toggleSearch, setToggleSearch] = useState("city");
  const [city, setCity] = useState("İstanbul");
  const [postalCode, setPostalCode] = useState("34880");
  const [lat, setLat] = useState(41.0351);
  const [long, setLong] = useState(28.9833);
  const [weather, setWeather] = useState({});

  const controller = new AbortController();
  const signal = controller.signal;


  //fetch lat long by city
  const fetchLatLongHandler = () => {
    fetch(
      //`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`
      //`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.coord.lat);
        setLong(data.coord.lon);
      });
  };

  //fetch lat long by postal code/zip since OpenWeather Api only accepts zips
  const fetchByPostalHandler = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_KEY}&components=postal_code:${postalCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.results[0].geometry.location.lat);
        setLong(data.results[0].geometry.location.lng);
      });
  };

  //updates the weather when lat long changes
  useEffect(() => {
    fetch(
      //`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log("fetching data", data)
      })
      .catch((err) => {
        console.log("error", err);
      });
    return () => controller.abort();
  }, [lat, long]);

  return (
    <Container>
      <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
        <ForecastSearch
          city={city}
          setCity={setCity}
          fetchLatLongHandler={fetchLatLongHandler}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          fetchByPostalHandler={fetchByPostalHandler}
          setPostalCode={setPostalCode}
          postalCode={postalCode}
        />
        <CurrentForecast currentWeather={weather} timezone={weather.timezone} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <FutureForecastContainer>
            {weather.daily ? (
              weather.daily.map((day, index) => {
                if (index !== 0) {
                  return <DailyForecast key={day.dt} day={day} index={index} />;
                }
              })
            ) : (
              <NoWeather>No Weather to show</NoWeather>
            )}
          </FutureForecastContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;