import React, { useState } from 'react';
import './Destination.css';
import Data from '../data/Data';


const Destination=({obj})=>{
    const [id,setId]=useState(obj.id);
    const [picture,setPicture]= useState(obj.picture);
    const [nom,setNom]= useState(obj.nom);
    const [adresse,setAdresse]= useState(obj.adresse);

    const [habitants,setHabitants]= useState(obj.habitants);
    const [hotels,setHotels]= useState(obj.hotels);
    const [revenu,setRevenu]= useState(obj.revenu);
    const [surface,setSurface]= useState(obj.surface);

    const [activer,setActiver]= useState(obj.activer);

    return(
    <div className="Destination">
        <img className='image' src={picture}></img>
        <div className='wrap-half'>
            <div className='wrap-top'>
                <div className='titl-add'>
                    <span className='nom'>{nom}</span>
                    <span>{adresse}</span>
                </div>
                <div className='lever'>
                    <div class="switch">
                    <label>
                    <input type="checkbox" 
                    defaultChecked={activer}
                    onChange={() => setActiver(!activer)}
                    />
                    <span class="lever"></span>
                    </label>
                    </div>
                </div>
            </div>
            <div className='wrap-bot'>
                <Data data1={habitants} data2="Habitants"/>
                <Data data1={hotels} data2="Hôtels"/>
                <Data data1={revenu} data2="Revenu Moy"/>
                <Data data1={surface} data2="Km²"/>
            </div>
        </div>
    </div>
    );
}

export default Destination;