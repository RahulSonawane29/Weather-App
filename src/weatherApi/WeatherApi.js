import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApi = () => {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("Pune");

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e6f6b7e14e2cc3908ce21d411d391b2`
      )
      .then((response) => {
        console.log(response?.data?.main);
        setCity(response?.data?.main);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <h2>WeatherApi</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search Your City Here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <br />

      {!city ? (
        <p>NO Data Found</p>
      ) : (
        <section style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div
              style={{
                width: "320px",
                height: "250px",
                border: "2px solid red",
                padding: 20,
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFniREJ7wn5I8Km88M9m4MKz1ptrosSzDpA&usqp=CAU')",
              }}
            >
              <h1>Your City:-{search}</h1>
              <h2>Today Temp:-{city.temp} Cel</h2>
              {city.temp > 25 ? (
                <h3>
                  <b>Notes:-</b>Even mornings can feel terrible during hot
                  weather.
                </h3>
              ) : (
                <h3>
                  <b>Notes:-</b>The weather outside is perfect for you
                </h3>
              )}
              <h2>Today Humidity:-{city.humidity} </h2>
              <span style={{ display: "flex", margin: 20 }}>
                <h5 style={{ padding: 5 }}>Max Temp:-{city.temp_max} Cel</h5>
                <h5 style={{ padding: 5 }}>Min Temp:-{city.temp_min} Cel</h5>
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WeatherApi;
