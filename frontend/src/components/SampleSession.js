import React, { useEffect, useState } from "react";

 
const Record = (props) => (
   <>
        {props.session.Exercises.map((exercise, index) => (
            <tr key={index}>
                    <td>{exercise[0]}</td>
                    <td>{exercise[2]}</td>
                    <td>{exercise[3]}</td>
                    <td>{exercise[4]}</td>
            </tr>
        ))}
    </>
);
 
export default function SessionList() {
    const [sessions, setSessions] = useState([]);
    
    // This method fetches the sessions from the database.
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
    }, [sessions.length]);
    
    // This method will map out the sessions on the table
    function sessionList() {
        return sessions.map((session, index) => {
            return (
                <>
                    <Record key={index} session={session}/>
                </>
                
            );
        });
    }
    
 
    // This following section will display the table with the sessions of individuals.
    return (
    <div>           
        <table class="table">
        <thead>
            <tr>
            <th>Exercise Name</th>
            <th>Sets</th>
            <th>Repititions</th>
            <th>Rest time</th>
            </tr>
        </thead>
        <tbody>{sessionList()}</tbody>
        </table>
    </div>
    );
}