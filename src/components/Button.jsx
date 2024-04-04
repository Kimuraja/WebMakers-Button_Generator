import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useButton } from "./useButton";
import Position from "./RandPosition";

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
  const { input, array, number, numberChange, textChange, handleClick } = useButton();
  const [buttonsStyles, setButtonsStyles] = useState([]);

  useEffect(() => {
    generateRandomStyles();
  }, [array]);

  const generateRandomStyles = () => {
    const newButtonsStyles = array.map(() => ({
      font: Math.random().toString(16).substring(9),
      bg: Math.random().toString(16).substring(9),
      border: Math.random().toString(16).substring(9),
      width: Math.floor(Math.random() * 61) + 20,
      height: Math.floor(Math.random() * 61) + 20,
      radius: Math.floor(Math.random() * 61) + 20,
      borderwidth: Math.floor(Math.random() * 20) + 1,
    }));
    setButtonsStyles(newButtonsStyles);
  };

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col col__left">
          <div className="input__section">
              <input
                className="input__section--number"
                type="number"
                value={number}
                onChange={numberChange}
              />
              <input
                className="input__section--text"
                type="text"
                placeholder="Enter text"
                value={input}
                onChange={textChange}
              />
              <button className="input__section--button" onClick={handleClick}>
                Losuj
              </button>
          </div>
        </div>
          
        

        <div className="col col__mid">
          {array.map((item, index) => (
            <Position key={index}>
              <Button
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
            </Position>
          ))}
        </div>
        <div className="col col__right">
          <pre>
            {array.map((item, index) => (
              <div key={index}>
                {`<Button
                  color="${buttonsStyles[index]?.font}"
                  background-color="${buttonsStyles[index]?.bg}"
                  border="solid ${buttonsStyles[index]?.border} ${buttonsStyles[index]?.borderwidth}px"
                  width="${buttonsStyles[index]?.width}px"
                  height="${buttonsStyles[index]?.height}px"
                  border-radius="${buttonsStyles[index]?.radius}px"
                >`}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
