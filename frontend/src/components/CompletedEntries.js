import React, { useEffect, useState } from "react";

 
const Record = (props) => (
 <tr>
   <td>{props.entry.exerciseName}</td>
   <td>{props.entry.repititions}</td>
   <td>{props.entry.resistance}</td>
 </tr>
);
 
export default function EntryList() {
    const [entries, setEntries] = useState([]);
    
    // This method fetches the entrys from the database.
    useEffect(() => {
    async function getEntries() {
        const response = await fetch(`http://localhost:5000/entries/`);
    
        if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
        }
    
        const entries = await response.json();
        setEntries(entries);
    }
    
    getEntries();
    
    return;
    }, [entries.length]);
    
    // This method will map out the entries on the table
    function entryList() {
        return entries.map((entry) => {
            return (
            <Record
                entry={entry}
                key={entry._id}
            />
            );
        });
    }
    
    // This following section will display the table with the entrys of individuals.
    return (
    <div>
        <h3>Completed</h3>
        <table class="table">
        <thead>
            <tr>
            <th>Exercise Name</th>
            <th>Resistance</th>
            <th>Repitions</th>
            </tr>
        </thead>
        <tbody>{entryList()}</tbody>
        </table>
    </div>
    );
}