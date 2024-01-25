//Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import anarchylogo from "/Users/dianne/Desktop/Milton/ Web Dev/reactapiproject/src/anarchylogo.svg";
import regularlogo from "/Users/dianne/Desktop/Milton/ Web Dev/reactapiproject/src/regularlogo.svg";

const Home = () => {
  const [imageUrls, setImageUrls] = useState({
    mapname:[],
    imageurl:[],
  });
  const [anarchyUrls, setAnarchyUrls] = useState({
    mapname:[],
    imageurl:[],
  });


  //const [anarchyUrls, setAnarchyUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://splatoon3.ink/data/schedules.json");
        console.log("Response from main api: ", res);
        console.log(
            "anarchy: ",
            res.data.data.bankaraSchedules
          );
          console.log(
            "anarchy nodes: ",
            res.data.data.bankaraSchedules.nodes[0]
          );
          console.log(
            "anarchy matchsetting: ",
            res.data.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0]
          );
          console.log(
            "anarchy vsstage: ",
            res.data.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[0]
          );
          console.log(
            "anarchy image: ",
            res.data.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[0].image.url
          );
          console.log(
            "anarchy name: ",
            res.data.data.bankaraSchedules.nodes[0].bankaraMatchSettings[0].vsStages[0].name
          );
        
        const regularSchedules = [];
        for (let x = 0; x <= 3; x++) {
          regularSchedules.push(res.data.data.regularSchedules.nodes[x].regularMatchSetting.vsStages[1].name);
        }

        const mapImage = [];
        for (let x = 0; x <= 3; x++) {
          mapImage.push(res.data.data.regularSchedules.nodes[x].regularMatchSetting.vsStages[1].image.url);
        }

        setImageUrls({
          mapname: regularSchedules,
          imageurl: mapImage,
        });

        const anarchySchedule = [];
        for (let x = 0; x <= 3; x++) {
          anarchySchedule.push(
            res.data.data.bankaraSchedules.nodes[x].bankaraMatchSettings[0].vsStages[0].name);
        }

        const anarchyImage = [];
        for (let x = 0; x <= 3; x++) {
          anarchyImage.push(
            res.data.data.bankaraSchedules.nodes[x].bankaraMatchSettings[0].vsStages[0].image.url);
        }

        setAnarchyUrls({
          mapname: anarchySchedule,
          imageurl: anarchyImage,
        });

      } catch (error) {
        console.error("Error fetching data from other API: ", error);
      }
    };
    fetchData();
  }, []); 
  return (
    <>
      <div className="home-container1">
      <div className="title-with-logo">
        <h2>Current Regular Maps</h2>
        
        <img src={regularlogo} alt="logo" />
        </div>
        <div className="card-container">
          <div className="splatfest-grid">
            {imageUrls.mapname.map((name, index) => (
              <div className="splatfest-item" key={index}>
                <p>{name}</p>
                <img src={imageUrls.imageurl[index]} alt={`Map Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
     

      <div className="home-container2">
      <div className="title-with-logo">
        <h2>Current Anarchy Maps</h2>
        <img src={anarchylogo} alt="logo" />
      </div>
        <div className="card-container">
          <div className="splatfest-grid">
            {anarchyUrls.mapname.map((name, index) => (
              <div className="splatfest-item" key={index}>
                <p>{name}</p>
                <img src={anarchyUrls.imageurl[index]} alt={`Map Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
