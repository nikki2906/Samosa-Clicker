import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // keep track of the current samosa per click
  const [multiplier, setMutilplier] = useState(1);

  //  sets the value of the state variable count to its current value plus multiplier when called.
  const updateCount = () => setCount(count + multiplier);

  //  checks if the count is greater than or equal to 10, and if so, sets the value of the state variable multiplier to its current value times 2.
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMutilplier(multiplier * 2);
      setCount(count - 10); // subtract the cost of the upgrade
    }
  }
  
  const buyPartyPack = () => {
    if (count >= 100) {
      setMutilplier(multiplier * 5);
      {/* we subtract the count by 100 bc the user has chosen to "buy" a Party Pack, which costs 100 samosas. */}
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMutilplier(multiplier * 10);
      setCount(count - 1000);
    }
  }
  

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="src/assets/samosa.png" className="samosa" onClick={updateCount} />
      </div>
      {/* one big container with three smaller containers */}
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>Double Stuffed 👯‍♀️</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App