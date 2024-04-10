import { useState } from "react";

export const useButton = () => {
  const [buttonsStyles, setButtonsStyles] = useState([]);
  const [userTextInput, setUserTextInput] = useState('');
  const [userNumber, setUserNumber] = useState(0);


  const generateButtonStyles = (userTextInput, userNumber) => {
    if (userTextInput !== '' && userNumber !== 0) {
      const numberOfButtons = Array.from({ length: userNumber }, () => userTextInput);
      
      const newButtonsStyles = [...numberOfButtons.map(() => ({
        font: Math.random().toString(16).substring(9),
        bg: Math.random().toString(16).substring(9),
        border: Math.random().toString(16).substring(9),
        width: Math.floor(Math.random() * 61) + 20,
        height: Math.floor(Math.random() * 61) + 20,
        radius: Math.floor(Math.random() * 61) + 20,
        borderwidth: Math.floor(Math.random() * 20) + 1,
      }))];
  
      setButtonsStyles(newButtonsStyles);
      return {
        buttonsStyles: newButtonsStyles,
        numberOfButtons,
      };
    } else {
      alert("Please check your data");
    }
  };
  

  return { buttonsStyles, userNumber, userTextInput, generateButtonStyles };
};
