import { useState } from "react";

export const useButton = () => {
  const [input, setInput] = useState('');
  const [array, setArray] = useState([])
  const [number, setNumber] = useState(0);

  const numberChange = (event) => {
    setNumber(event.target.value)
  }

  const textChange = (event) => {
    setInput(event.target.value);
  }
  
  const handleClick = () => {
    if (input !== '' && number !== 0) {
      setArray((prev) => [
        ...prev, 
        input
      ]);
      setInput('');
      setNumber(0)
    } else {
      alert("Please check your data")
    }
    const multipliedArray = Array.from({ length: number }, () => input);
    setArray(multipliedArray)
  }

  return {input, array, number, numberChange, textChange, handleClick}
}