import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Splatfest.css";

const Splatfest = () => {
  const [splatfestData, setsplatData] = useState({
    splatfestname:[],
    imageurl:[],
  }

  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://splatoon3.ink/data/festivals.json");
        console.log("Response from main api: ", response);
        console.log("Home data: ", response.data);
        console.log("US Results: ", response.data.US);
        console.log("festrecords: ", response.data.US.data.festRecords);
        console.log(
          "nodes: ",
          response.data.US.data.festRecords.nodes[0]
        );
        console.log(
          "title: ",
          response.data.US.data.festRecords.nodes[0].title
        );
        console.log(
          "Picture : ",
          response.data.US.data.festRecords.nodes[0].image.url
        );
  
        const splatData=[];
       for(let x=0;x<=11;x++){
        splatData.push(response.data.US.data.festRecords.nodes[x].title);

       } 
       const splatfestImage=[];
       for(let x=0;x<=11;x++){
        splatfestImage.push(response.data.US.data.festRecords.nodes[x].image.url)

       } 
       setsplatData({
        splatfestname: splatData,
        imageurl: splatfestImage,
      });

      } catch (error) {
        console.error("Error fetching data from other API: ", error);
      }
    };

    // Call the function to fetch data
    fetchData();
  }, []); // Make sure to adjust the dependency array as needed

  const splatfest = "Past Splatfest Results";

  return (
    <div className="my-splatfest-container">
     
      <div className="splatfest-grid">
        {splatfestData.splatfestname.map((name, index) => (
          <div className="splatfest-item" key={index}>
             <p>{name}</p>
            <img src={splatfestData.imageurl[index]} alt="splafest Image" />
           
          </div>
        ))}
      </div>
     
    </div>
  );
  
};

export default Splatfest;
