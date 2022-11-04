import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Video = (props) => {
     
const [rate, setRate]=useState(0); //HOOK

const rateVideo=()=>{ //funcion para agregar estrellas a cada video
    if (rate <5){
    setRate(rate +1)
    console.log(rate)
    }

    
}

 //Component didUpdate
 useEffect(()=>{
    //consulta a la API=> ARRAY CON LOS DATOS DE LOS VIDEOS
    //Este HOOK tiene 2 argumentos, una funcion y un array
    console.log("Ups, el componente se ha actualizado")

}, [rate]) //=> rate es una dependencia de este HOOK
    return (
    <div className="video-container">
        <div className="video-image">
            <img src={props.thumbnails} alt="Same alt value" /></div>
            <div className="video-info">
                <button onClick={props.deleteVideo}>Delete this video</button>
                <h3>{props.title}</h3>
                <span>This video has {rate} star </span><button onClick={rateVideo}>Rate this video</button>
            <p>Upload date: {props.date}</p>
            <h4>Channel's Title: {props.channel}</h4>
            <p>{props.description}</p>
            </div></div>
            )
        }
            export default Video;