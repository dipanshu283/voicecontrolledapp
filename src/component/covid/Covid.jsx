import React from "react";
import "./Covid.css";

function CovidState({hdata}) {
  const newsimg = require("./covidimg.png");
  console.log("hl",hdata);
  if (!hdata.length){
    return (
      <>
        <div className="covid_wrapper">
          <div className="infoo">
            <h1 className="bold">"show/give me the covid updates"</h1>
          </div>
          <img className="imgggg" src={newsimg} alt="" />

        </div>
      </>
    );
  }
else{
  return (
    <>
      <div className="covid_wrapper">
          <div className="infoo">
            <h1 className="bold">"here is a covid dashboard"</h1>
          </div>
          <img className="imgggg" src={newsimg} alt="" />

        </div>
    <div className="container">
      <h1 className="headingg">
        <span className="thick-heading IN">IN</span>
        <span className=" thick-heading D">D</span>
        <span className=" thick-heading IA">IA </span>
        COVID-19 Dashboard
      </h1>


<div className="table-responsive tablee">
      <table className="table table-hover ">

      <thead className="table-dark">
        <tr className="dark">
          <th>State</th>
          <th>Confirm</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Update</th>
        </tr>
        </thead>

        <tbody className="table-body">
      
       
       {hdata.map((value, index)=>{
           console.log(value.state);
           return(
        <tr key={index}>
            <td>{value.state}</td>
            <td>{value.confirmed}</td>
            <td>{value.recovered}</td>
            <td>{value.deaths}</td>
            <td>{value.active}</td>
            <td>{value.lastupdatedtime}</td>
          </tr>
           );
       })}
         
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}
}
export default CovidState;
