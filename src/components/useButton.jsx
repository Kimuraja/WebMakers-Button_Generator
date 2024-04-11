export const useButtonsGenerator = () => {
  const generateButton = (userTextInput, userNumber ) => {
    if (userTextInput !== '' && userNumber !== 0) {
      const buttonLabels = Array.from({ length: userNumber }, () => userTextInput);
      
      const newButtonsStyles = [...buttonLabels.map(() => ({
        font: Math.random().toString(16).substring(9),
        bg: Math.random().toString(16).substring(9),
        border: Math.random().toString(16).substring(9),
        width: Math.floor(Math.random() * 61) + 20,
        height: Math.floor(Math.random() * 61) + 20,
        radius: Math.floor(Math.random() * 61) + 20,
        borderwidth: Math.floor(Math.random() * 20) + 1,
      }))];

      const styledButtons = buttonLabels.map((button, index) => ({
        text: button,
        styles: newButtonsStyles[index]
      }));
      return styledButtons
    } 
  };

  return { generateButton };
};
