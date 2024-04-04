import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 100px;
  height: 100px;
`

export default function Position({ children }){

  const top = Math.floor(Math.random() * 100) + 1;
  const left = Math.floor(Math.random() * 100) + 1;

  return (
    <Div top={top} left={left}>
      <ul>
        <li>
          {children}
        </li>
      </ul>
    </Div>
  )
}
