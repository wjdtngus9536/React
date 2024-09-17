import React, { createContext, useContext } from 'react';
import './style.css';

const themeDefault = { border: '10px solid red' };
// 컨텍스트 만들기
const themeContext = createContext(themeDefault);

export default function App() {
  // 컨텍스트 디폴트값 읽어오기
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <themeContext.Provider value={{ border: '10px solid blue' }}>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <themeContext.Provider value={{ border: '10px solid green' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}
