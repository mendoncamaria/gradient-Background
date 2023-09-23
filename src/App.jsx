import { useState } from 'react';

const height = window.innerHeight;

function App() {
  const [col1, setCol1] = useState('#d9a7c7');
  const [col2, setCol2] = useState('#fffcdc');
  const [direction, setDirection] = useState('right');
  return (
    <div
      style={{
        height: height,
        backgroundImage: `linear-gradient(to ${direction}, ${col1}, ${col2})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>Gradient Color Selector</h1>
      <p>Choose Direction</p>
      <div>
        <button>Top</button>
        <button>Right</button>
        <button>Bottom</button>
        <button>Left</button>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <input
          type="color"
          value={col1}
          onChange={(e) => setCol1(e.target.value)}
          style={InputStyles}
        />
        <input
          type="color"
          value={col2}
          onChange={(e) => setCol2(e.target.value)}
          style={InputStyles}
        />
      </div>
    </div>
  );
}

export default App;

// Styles
const InputStyles = {
  width: '100px',
  height: '50px',
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
};
