import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyGear.css";

const Gear = () => {
  const [gearData, setGearData] = useState({
    gearname:[],
    imageurl:[],
  }

  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://splatoon3.ink/data/gear.json");
        console.log("Response from main api: ", response);
        console.log("Home data: ", response.data);
        console.log("Regular schedule: ", response.data.data.gesotown);
        console.log("Brand: ", response.data.data.gesotown.limitedGears[0]);
        console.log(
          "Actual Brand: ",
          response.data.data.gesotown.limitedGears[0].gear
        );
        console.log(
          "Name Brand: ",
          response.data.data.gesotown.limitedGears[0].gear.image
        );
        console.log(
          "Picture Brand: ",
          response.data.data.gesotown.limitedGears[0].gear.image.url
        );
        // console.log(
        //   "Picture Brand2: ",
        //   response.data.data.gesotown.limitedGears.gear.node[0].gear.url
        // );
        // console.log(
        //   "Final url Brand2: ",
        //   response.data.data.gesotown.limitedGears.gear.usualGearPower.image.url
        // );
        
        // Extract specific gear-related data and set it to state
        //const gearInfo = response.data.data.gesotown.limitedGears[0].gear.image.url;
          console.log("what is this",response.data.data.gesotown.limitedGears[1].gear.name)
        const gearData=[];
       for(let x=0;x<=5;x++){
          gearData.push(response.data.data.gesotown.limitedGears[x].gear.name)

       } 
       const gearImage=[];
       for(let x=0;x<=5;x++){
        gearImage.push(response.data.data.gesotown.limitedGears[x].gear.image.url)

       } 
       setGearData({
        gearname: gearData,
        imageurl: gearImage,
      });

      } catch (error) {
        console.error("Error fetching data from other API: ", error);
      }
    };

    // Call the function to fetch data
    fetchData();
  }, []); // Make sure to adjust the dependency array as needed

  const currentGearsText = "Current Gears";

  return (
    <div className="my-gear-container">
     
      <div className="gear-grid">
        {gearData.gearname.map((name, index) => (
          <div className="gear-item" key={index}>
            <img src={gearData.imageurl[index]} alt="Gear Image" />
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className="salmon-character">
        <img src={require("./salmon-character.png")} alt="Salmon Character" />
      </div>
    </div>
  );
  
};

export default Gear;
