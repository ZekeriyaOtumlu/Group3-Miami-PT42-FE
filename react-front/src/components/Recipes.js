import React from "react";
import './Recipes.css';
import Wok from '../videos/wok.mp4';

export const Recipes =()=>{
    return (
        <div>
            <h1>Recipes </h1>
            <video>
                <source src={Wok} type='video.mp4'/>
            </video>
        </div>
    )
}