import React, {useState, useEffect } from "react";
import {useNavigate} from "react-router";

import  './RecordEntry.css';
import UpNext from "./UpNext.js";
import ActiveSession from "../pages/ActiveSession.js";

const RecordEntry = () => {
    const [form, setForm] = useState({movement:"", repetitions:"", resistance:""});
    const [count, setCount] = useState(0);
    const [sessions, setSessions] = useState([]);
    const result = [];

    useEffect(() => {
        async function getSessions() {
            const response = await fetch(`http://localhost:5000/sessions/`);
        
            if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
            }
        
            const sessions = await response.json();
            setSessions(sessions);
        }
        getSessions();
        
        return;
        }, [sessions.length])
    
    const navigate = useNavigate();

    const increase = () => setCount(count + 1);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    //function handles submission
    async function onSubmit(e) {
        e.preventDefault();

        //when a post request is sent to the record URL, a new entry will be added to the database.
        const newEntry = {...form };

        await fetch("http://localhost:5000/entries/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEntry),
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

        setForm({ movement:"find value", repititions: "", resistance: ""});
        navigate(ActiveSession);

        increase();
        //session.shift();
        // move the array up one
        // add the next set to the active text
    }

    const UpNextList = () => {
        sessions[0]?.Exercises.forEach((exercise) => {
            const [exerciseName, , sets, repetitions, rest] = exercise;
            for (let i = 0; i < sets; i++) {
              result.push([exerciseName, repetitions, rest]);
            }
        });    
        return result.slice(count).map((item) => {
            return(
                <div className="grid-container">
                <table>
                    <tr>
                        <th>Exercise</th>
                        <th>Repititions</th>
                        <th>Rest</th>
                    </tr>
                    <tr>
                        <td>
                            {item[0]}
                        </td>
                        <td>
                            <input 
                                type="text" 
                                id="repitions" 
                                name="repititions" 
                            />
                        </td>
                            <td>
                                {item[2]}
                            </td>
                        </tr>
                    </table>
            </div>
            ) 
        })
    }
    
    return (
        <div className="grid-container">
            <h1>Exercise</h1>
            <form onSubmit={onSubmit}>
                <div className="group1">
                    <div>
                        <label htmlFor="exerciseName">Exercise Name:</label>
                        <input 
                            type="text" 
                            id="exerciseName" 
                            name="exerciseName" 
                            value={form.exerciseName} 
                            onChange={onChange}
                        />                       
                    </div>
                    <div>
                        <label htmlFor="repititions">Repititions</label>
                        <input 
                            type="text" 
                            id="repitions" 
                            name="repititions"  
                            value={form.repititions} 
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="resistance">Resistance</label>
                        <input 
                            type="text" 
                            id="resistance" 
                            name="resistance" 
                            value={form.resistance} 
                            onChange={onChange}
                        />
                    </div>
                    
                    
                </div>
                <button type="submit">Submit</button>
            </form>
            <UpNextList />
             
        </div>
    );
}
export default RecordEntry;