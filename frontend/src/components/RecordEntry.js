import React, {useState} from "react";
import {useNavigate} from "react-router";
import EntryList from './CompletedEntries.js';
import  './RecordEntry.css';

const session = [
    {setNum: 1, exerciseName: "Barbell Back Squat",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 2, exerciseName: "Machine Leg Extension",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 3, exerciseName: "Machine Seated Leg Curl",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 4, exerciseName: "Machine Leg Press",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 5, exerciseName: "Calf Raise on Machine Leg Press", repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 6, exerciseName: "Barbell Standing Calf Raise",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 7, exerciseName: "Barbell Back Squat",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 8, exerciseName: "Crunch",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 9, exerciseName: "Cable Kneeling Crunch",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
    {setNum: 10, exerciseName: "Barbell Back Squat",repititions: 10, resistance: 135, rest: 60, exerciseID: "13796"},
];
const RecordEntry = () => {
    const [form, setForm] = useState(session);
    const [count, setCount] = useState(0);
    
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

        setForm({ exerciseName: session[count].exerciseName, repititions: "", resistance: ""});
        navigate("/");

        increase();
        session.shift();
        // move the array up one
        // add the next set to the active text
    }

    
    return (
        <div className="grid-container">
                     
            <form onSubmit={onSubmit}>
                <div className="group1">
                    <div>
                        <label htmlFor="exerciseName">Exercise Name:</label>
                        <input 
                            type="text" 
                            id="exerciseName" 
                            name="exerciseName" 
                            defaultValue={session[count].exerciseName}
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
            <div>
                <h3>Up next</h3>
                {session.map(sessionSet => {
                return (
                    <div key={sessionSet.setNum} className="group1">
                        <div> {sessionSet.exerciseName}</div> 
                        <div> {sessionSet.repititions} </div> 
                        <div> {sessionSet.resistance} </div>
                    </div>
                )
            })}
            </div>
            
            <input list="ice-cream-flavors"/>
            <datalist id="ice-cream-flavors">
                {session.map(sessionSet => {
                    return (
                        <div key={sessionSet.setNum}>
                            <option>{sessionSet.exerciseName}</option>
                        </div>
                    )
                })}
            </datalist> 
            
        </div>
    );
}
export default RecordEntry;