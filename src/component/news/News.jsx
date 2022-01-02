import React from "react";
import "./News.css";
import Card from "./Card";

function News({ articles }) {
  const newsimg = require("./newimg.png");
  if (!articles.length) {
    return (
      <>
        <div className="news_wrapper">
          <img className="imgggg" src={newsimg} alt="" />
          <div className="infoo">
            <h1>What are you doing man,</h1>
            <h1>check out what's going on in the world </h1>
            <h1 className="bold">"show/give me the latest news"</h1>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="card_wrapper">
      <div className="news_wrapperrr">
        <div className="home_cards_wrapper">
          <p className="by"> News by Catogory</p>
          <p className="title">Catogory</p>
          <p className="ex">
            "Business, Entertainment, General, Health, Science, sports,
            Texhnology...."
          </p>
          <p className="tryy">

            <p>Try saying :</p>"Show me some news related to Business "
          </p>
        </div>
        <div className="home_cards_wrapper">
          <p className="by"> News by terms</p>
          <p className="title">Terms</p>
          <p className="ex"> "Bitcoin, Smarthphones, Covid, iphones.....",
       
          </p>
          <p className="tryy">

            <p>Try saying :</p>'what's up with Bitcoin.'
          </p>
        </div>
        <div className="home_cards_wrapper">
          <p className="by"> News by sources</p>
          <p className="title">Sources</p>
          <p className="ex">
          BBC News, CNN, Wired, Time, IGN, ABC News.......",
          </p>
          <p className="tryy">

            <p>Try saying :</p>"Give/Show the news from BBC News"
          </p>
        </div>
      </div>
      {articles.map((article, index) => {
        return (
          <>
            <div key={index} className="card">
              <Card article={article} index={index} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default News;
