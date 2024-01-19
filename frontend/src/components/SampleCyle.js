import React, { useState } from 'react';

const SampleCycle = () => {
    const [count, setCount] = useState (0);
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

 

  return (
    <div>
        <h1>test</h1>
        <div>
            {session.map(sessionSet => {
                return (
                    <div key={sessionSet.setNum}>
                        {sessionSet.exerciseName} and {sessionSet.repititions} and {sessionSet.resistance}
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default SampleCycle;

