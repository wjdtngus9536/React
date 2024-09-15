import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
  );
}

const contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' }
]

function Topic() {
  return (
    <div>
      <h3>Topic</h3>
      Topic ...
    </div>
  );
}

function Topics() {
  const lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>

      <Routes>
        <Route path='/:topic_id' element={<Topic />} />
      </Routes>
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
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics/*' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
