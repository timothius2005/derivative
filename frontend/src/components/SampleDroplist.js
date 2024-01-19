import React, {useState} from "react";
import {useNavigate} from "react-router";
import Select from "react-select";

const movements = [
    {   
        id: 400,
        commonName: "Barbell Flat Bench Chest Press",
        movement: "Chest Press",
        equipment: [
          "EZ Barbell",
          "Straight Barbell",
          "Smith Machine"
        ],
        gripDirection: [
          "Underhand",
          "Overhand",
          "Alternating"
        ],
        gripWidth: ["Narrow", "Normal", "Wide"],
        stance: ["Laying Supine", "Laying Tabletop"],
        stanceMod: ["Bench", "Medicine Ball"]
      },
      {   
        id: 401,
        commonName: "Dumbbell Flat Bench Chest Press",
        movement: "Chest Press",
        equipment: [
          "Dumbbell",
          "Kettlebell",
          "Kettlebell Sport Rack",
          "Kettlebell Bottoms up",
        ],
        gripDirection: [
          "Underhand",
          "Overhand",
          "Alternating",
          "Hammer",
          "Diagonal",
        ],
        gripWidth: ["Narrow", "Normal", "Wide"],
        stance: [" Laying Supine", "Laying Tabletop"],
        stanceMod: ["Bench", "Medicine Ball"],
        movementMod: ["Simultaneous", "Alternating", "Single Arm", "High Static Hold", "Mid Static Hold", "Low Static Hold"]
      }
]

const SampleDroplist = () => {
    return (
        <div>
          <h1>Hello!!</h1>
          {movements.map((movement, index) => {
            return (
              <div>
              <div key={index}>
                <h2>{movement.commonName}</h2>
              </div>
              <select>
                {movement.equipment.map((equipmentOption, index) => 
                    <option value={index}>{equipmentOption}</option>
                )} 
              </select>
              <select>
                {movement.gripDirection.map((gripDirectionOption, index) => 
                    <option value={index}>{gripDirectionOption}</option>
                )} 
              </select>
              <select>
                {movement.gripWidth.map((gripWidthOption, index) => 
                    <option value={index}>{gripWidthOption}</option>
                )}
              </select>
              <select>
                {movement.stance.map((stanceOption, index) => 
                    <option value={index}>{stanceOption}</option>
                )} 
              </select>
              <select>
                {movement.stanceMod.map((stanceModOption, index) => 
                    <option value={index}>{stanceModOption}</option>
                )} 
              </select>
              </div>
            );       
          })}
        </div>
    );
}


export default SampleDroplist; 