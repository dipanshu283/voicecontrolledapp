import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useState } from "react";
import Weather from "./component/weather/Weather";
import Talk from "./component/letstalk/Talk";
import News from "./component/news/News";
import CovidState from "./component/covid/Covid";

function App() {
  const [weatherinfo, setwetherinfo] = useState([]);
  const [newsArticles, setnewsArticles] = useState([]);
  const [hdata, sethdata] = useState([]);

  useEffect(() => {
    const key =
      "e45f3f500923192b166c768b47a6388f2e956eca572e1d8b807a3e2338fdd0dc/stage";
    alanBtn({
      key: key,
      onCommand: ({ command, citty, articles }) => {
        if (command === "giveweather") {
          // setnewsArticles(articles);
          fetched(citty);
        }
        if (command === "givecovid") {
          // setnewsArticles(articles);
          fetchData();
        }
        if (command === "newHeadLines") {
          setnewsArticles(articles);
        }
        if (command === "GoBack") {
          setnewsArticles([]);
          setwetherinfo([]);
          sethdata([]);
        }
      },
      // onCommand: ({ command , articles}) => {
      //   if (command === "newHeadLines") {
      //     setnewsArticles(articles);
      //     console.log(articles);
      //   }
      // },
    });
  }, []);

  const fetched = async (citty) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=715e73f6632ecedac1c05aec0c1990e3&q=${citty}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setwetherinfo(data);
    return data;
  };

  const fetchData = async () => {
    const urll = "https://data.covid19india.org/data.json";
    const responsee = await fetch(urll);
    let dataa = await responsee.json();
    dataa = dataa.statewise;
    console.log(dataa);
    sethdata(dataa);
  };

  return (
    <>
      <div className="home_page">
        <Weather info={weatherinfo} />
        <Talk />
        <News articles={newsArticles} />
        <CovidState hdata={hdata} />
      </div>
    </>
  );
}

export default App;
