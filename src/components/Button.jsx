import React, { useState } from "react";
import styled from "styled-components";
import { useButton } from './useButton'

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
  const [buttonArray, setButtonArray] = useState([]);
  const [userNumber, setUserNumber] = useState(0);

  const { buttonsStyles, generateButtonStyles } = useButton();

  const handleNumberChange = (event) => {
    setUserNumber(event.target.value);
  };
  
  const handleTextChange = (event) => {
    setUserTextInput(event.target.value);
  };

  const handleGenerateButton = () => {
    const generatedResult = generateButtonStyles(userTextInput, userNumber);
    if (generatedResult) {
      setButtonArray([...generatedResult.numberOfButtons]);
      setUserTextInput('');
      setUserNumber(0);
    } else {
      setButtonArray([]);
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
            <button className="input__section--button" onClick={handleGenerateButton}>
              Losuj
            </button>
          </div>
        </div>
        <div className="col col__mid">
          {buttonArray.map((button, index) => (
            <Button key={index} {...buttonsStyles[index]}>
              {button}
            </Button>
          ))}
        </div>
        <div className="col col__right">
          <pre>
            {buttonArray.map((button, index) => (
              <div key={index}>
                {`button {
                  color: #${buttonsStyles[index]?.font};
                  background-color: #${buttonsStyles[index]?.bg};
                  border: solid #${buttonsStyles[index]?.border} ${buttonsStyles[index]?.borderwidth}px;
                  width: ${buttonsStyles[index]?.width}px;
                  height: ${buttonsStyles[index]?.height}px;
                  border-radius: ${buttonsStyles[index]?.radius}px;
                }`}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
