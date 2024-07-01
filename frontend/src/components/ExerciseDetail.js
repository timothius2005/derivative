import React, {useState, useEffect } from "react";
import {useNavigate} from "react-router";

const ExerciseDetail = () => {
    const [equipment, setEquipment] = useState("Barbell");
    const [eqMod, setEqMod] = useState("Straight Bar");
    const [eqMod2, setEqMod2] = useState("");


    const handleEquipmentChange = (event) => {
      setEquipment(event.target.value)
    }
    const handleEqModChange = (event) => {
        setEqMod(event.target.value)
      }
      const handleEqMod2Change = (event) => {
        setEqMod2(event.target.value)
      }
    
    
    
    return (
        <div>
            <form>
            <select value={equipment} onChange={handleEquipmentChange}>
                <option value="Barbell">Barbell</option>
                <option value="Dumbbell">Dumbbell</option>
                <option value="Cable">Cable</option>
            </select>
            <select value={eqMod} onChange={handleEqModChange}>
                <option value="Barbell">Barbell</option>
                <option value="Dumbbell">Dumbbell</option>
                <option value="Cable">Cable</option>
            </select>
            <select value={equipment} onChange={handleEqMod2Change}>
                <option value="Barbell">Barbell</option>
                <option value="Dumbbell">Dumbbell</option>
                <option value="Cable">Cable</option>
            </select>
            </form>
        </div>
    );
}

export default ExerciseDetail;