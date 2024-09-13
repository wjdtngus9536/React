import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h2>Hello React Router DOM</h2>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
