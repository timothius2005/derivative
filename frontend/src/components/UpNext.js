import React, { useEffect, useState } from "react";
 
export default function UpNext() {
    const [sessions, setSessions] = useState([]);
    const sessionArr = [
        {
        "_id":{"$oid":"660856145855f348500df379"},
        "ProgramName":"Lee Hayward 12 week wokrout program ",
        "WorkoutDay":"Monday 1",
        "Exercises":
            [
                ["Barbell Squat","36110000000", '5',"5","60","No"],
                ["Barbell Deadlift","18110000008","5","5","120","No"],
                ["Standing Calf Raise","14900000004","5","10","45","No"],
                ["Roman Chair Leg Raise","27400000000","5","10","45","No"],
                ["Incline Situp","350000003300","3","20","30","No"]
            ]
        }
    ]
   
    // This method will map out the sessions
    return (
        <div>       
            {sessionArr.map((session, outerIndex) => {             
                return (  
                    <div>
                        <h3>Up Next</h3>              
                        {session.Exercises.map((exercise, innerIndex) => {
                                const result = [];
                                const repeatedStrings = Array.from({length: exercise[2]}, () => [exercise[0], exercise[2], exercise[3], exercise[4]]);
                                result.push(...repeatedStrings);

                                return (
                                    <div>
                                     {result.map((item) => {
                                        return(
                                            <>
                                                movement: {item[0]}, reps: {item[3]}, rest: {item[4]}
                                            <br />
                                            </>
                                        ) 
                                     })
                                    }
                                    </div>
                                );
                            })}
                    </div>
                )            
            })}
        </div>
    );
}