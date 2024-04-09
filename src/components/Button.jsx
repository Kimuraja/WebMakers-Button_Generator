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
  const [array, setArray] = useState([]);
  const [userNumber, setUserNumber] = useState(0);

  const { buttonsStyles, handleClick } = useButton();

  const numberChange = (event) => {
    setUserNumber(event.target.value);
  };
  
  const textChange = (event) => {
    setUserTextInput(event.target.value);
  };

  const handleButtonClick = () => {
    const result = handleClick(userTextInput, userNumber, array);
    if (result) {
      const { multipliedArray } = result;
      setArray([...multipliedArray]);
      setUserTextInput('');
      setUserNumber(0);
    } else {
      setArray([])
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
              onChange={numberChange}
            />
            <input
              className="input__section--text"
              type="text"
              placeholder="Enter text"
              value={userTextInput}
              onChange={textChange}
            />
            <button className="input__section--button" onClick={handleButtonClick}>
              Losuj
            </button>
          </div>
        </div>
        <div className="col col__mid">
          {array.map((item, index) => (
            <Button key={index}
              font={buttonsStyles[index]?.font}
              bg={buttonsStyles[index]?.bg}
              border={buttonsStyles[index]?.border}
              width={buttonsStyles[index]?.width}
              height={buttonsStyles[index]?.height}
              radius={buttonsStyles[index]?.radius}
              borderwidth={buttonsStyles[index]?.borderwidth}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="col col__right">
          <pre>
            {array.map((item, index) => (
              <div key={index}>
                {`button {
                  color: "${buttonsStyles[index]?.font};"
                  background-color: "${buttonsStyles[index]?.bg};"
                  border: "solid ${buttonsStyles[index]?.border} ${buttonsStyles[index]?.borderwidth}px;"
                  width: "${buttonsStyles[index]?.width}px;"
                  height: "${buttonsStyles[index]?.height}px;"
                  border-radius: "${buttonsStyles[index]?.radius}px;"
                }`}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
