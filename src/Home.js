import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
        Company:'',
        Two:'',
        
    })
    const [colorsData,setColorsData]=useState([])

    useEffect(()=>{
        axios.get('https://splatoon3.ink/data/schedules.json')
            .then(res=>{
                console.log("Response from main api: ", res);
                console.log("Home data: ", res.data);
                console.log("Regular schedule: ", res.data.data.regularSchedules);
                console.log("Nodes: ", res.data.data.regularSchedules.nodes);
                console.log("Regulaar Match: ", res.data.data.regularSchedules.nodes[0].regularMatchSetting);
                console.log("Stages: ", res.data.data.regularSchedules.nodes[0].regularMatchSetting.vsStages);
                console.log("Inmage data: ", res.data.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[1].image);
                console.log("Final url: ", res.data.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[1].image.url);


                //let companyData=res.data.ad;

               setData({Company:res.data.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[1].image.url, Two:res.data.data.regularSchedules.nodes[0].regularMatchSetting.vsStages[0].image.url});
                
                //console.log(res.regularSchedules.nodes.vsStages);
       

            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <div className="home-container">
            <h2>Current Maps</h2>
            <img src = {Data.Company} />
            <img src = {Data.Two} />
            </div>
            
        </>
    )
}

export default Home;