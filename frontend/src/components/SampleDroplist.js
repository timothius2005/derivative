import React, {useState} from "react";
import {useNavigate} from "react-router";
import Select from "react-select";
import SessionList from './SampleSession';
import UpNext from "./UpNext";

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
        stanceMod: ["Bench", "Medicine Ball"],
        sessionSample: [
          ["Barbell Squat","36110000000",{"$numberInt":"5"},{"$numberInt":"5"},{"$numberInt":"60"},"No"]
        ]
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
        movementMod: ["Simultaneous", "Alternating", "Single Arm", "High Static Hold", "Mid Static Hold", "Low Static Hold"],
        sessionSample: [
          ["Barbell Squat","36110000000","5", "5", "60","No"],
          ["Barbell Deadlift","18110000008","5", "5", "60","No"]
        ]
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
                <select>
                  {movement.sessionSample.map((sessionOption, index) =>
                    <option value={index}>{sessionOption[0]}</option>
                  )}
                </select>
              </div>
            );       
          })}
          <div>
            {<SessionList />}
          </div>
          <div>
            {<UpNext />}
          </div>
        </div>
    );
}


export default SampleDroplist; 