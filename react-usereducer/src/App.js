import './App.css';
import { useState } from 'react';



function App() {
    const [count, setCount] = useCount(0);
    const [number, setNumber] = useState(1);

    function down() {
        setCount(count - number);
    }
    function reset() {
        setCount(0);
    }
    function up() {
        setCount(count + number);
    }
    function changeNumber(event) {
        setNumber(Number(event.target.value))
    }


    return (
        <div className="App">
            <input type='button' value='-' onClick={down} />
            <input type='button' value='0' onClick={reset}/>
            <input type='button' value='+' onClick={up}/>
            <input type='text' value={number} onChange={changeNumber} />
            <span>{count}</span>
        </div>
    );
}

export default App;
