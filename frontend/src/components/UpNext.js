import React, { useEffect, useState } from "react";
 
export default function UpNext(count) {
    const result = [];
    const [sessions, setSessions] = useState([]);
    
    console.log(count)
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
        
        const UpNextList = () => {
            sessions[0]?.Exercises.forEach((exercise) => {
                const [exerciseName, , sets, repetitions, rest] = exercise;
                for (let i = 0; i < sets; i++) {
                  result.push([exerciseName, repetitions, rest]);
                }
            });    
            return result.slice(count).map((item) => {
                return(
                    <tr>
                        <td>
                            {item[0]}
                        </td>
                        <td>
                            {item[1]}
                        </td>
                        <td>
                            {item[2]}
                        </td>
                        </tr>
                ) 
            })
    
        }   

    // This method will map out the sessions
    return (
        <div>
            <h3>Up Next</h3>
            <table>
                <tr>
                    <th>
                        Movement
                    </th>
                    <th>
                        Repititions
                    </th>
                    <th>
                        Resistance
                    </th>
                    <th>
                    </th>
                </tr>
                <tbody>
                    {UpNextList()}
                </tbody>        
           </table>
        </div>
    );
}