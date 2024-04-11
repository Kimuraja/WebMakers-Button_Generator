import React, { useState } from "react";
import styled from "styled-components";
import { useButtonsGenerator } from './useButton'

const generateButtonStyle = (props) => `
  color: #${props.font};
  background-color: #${props.bg};
  width: ${props.width}px;
  height: ${props.height}px;
  border: solid #${props.border} ${props.borderwidth}px;
  border-radius: ${props.radius}px;
  cursor: pointer;
`;

const Button = styled.button`
  ${(props) => generateButtonStyle(props)}
`;

export default function BtnGenerator() {
  const [userTextInput, setUserTextInput] = useState('');
  const [arrayOfButtons, setArrayOfButtons] = useState([]);
  const [userNumber, setUserNumber] = useState(0);

  const { generateButton } = useButtonsGenerator();

  const handleNumberChange = (event) => {
    setUserNumber(event.target.value);
  };
  
  const handleTextChange = (event) => {
    setUserTextInput(event.target.value);
  };

  const onGenerateButtonClick = () => {
    const generatedResult = generateButton( userTextInput, userNumber )
    if (generatedResult) {
      setArrayOfButtons(generatedResult);
      setUserTextInput('');
      setUserNumber(0);
    } else {
      alert("Please check your data");
      setArrayOfButtons([]);
    }
  };

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col col__left">
          <div className="input__section">
            <input
              className="input__section--number"
              type="number"
              value={userNumber}
              onChange={handleNumberChange}
            />
            <input
              className="input__section--text"
              type="text"
              placeholder="Enter text"
              value={userTextInput}
              onChange={handleTextChange}
            />
            <button className="input__section--button" onClick={onGenerateButtonClick}>
              Losuj
            </button>
          </div>
        </div>
        <div className="col col__mid">
          {arrayOfButtons.map((button, index) => (
            <Button key={index} {...button.styles}>
              {button.text}
            </Button>
          ))}
        </div>
        <div className="col col__right">
          <pre>
            {arrayOfButtons.map((button, index) => (
              <div key={index}>
                {`button {
                  color: #${button.styles.font};
                  background-color: #${button.styles.bg};
                  border: solid #${button.styles.border} ${button.styles.borderwidth}px;
                  width: ${button.styles.width}px;
                  height: ${button.styles.height}px;
                  border-radius: ${button.styles.radius}px;
                }`}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
