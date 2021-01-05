import React, { useState,useContext } from 'react';

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state,setState] = useContext(AppContext);

    const [appState, setAppState] = useState({
    init: false,
    stepData: {
      isAvialable: false,
      pastStepCount: 0,
      currentStepCount: 0,
    },
    character: {
      name: "Nikki",
      profileImage: null,
      level: 1,
      experience: 0,
      currentStepCount: 0,
      stepsPerDay: 1000,
      menu: null,
      challanges: {
        slot1: null,
        slot2: null,
        slot3: null
      },
      skills: {
        slot1: null,
        slot2: null,
        slot3: null
      },
      equipment: {
        head: null,
        shoulders: null,
        chest: null,
        hands: null,
        legs: null,
        feet: null,
        mainhand: null,
        offhand: null
      },
      bag: []
    },
    riftWalking : {
      active: false,
      startSteps: 0,
      endTime: 0,
      date: ''
    },

  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

const AddExperience = (exp) => {

}

export { AppContext, AppProvider };
