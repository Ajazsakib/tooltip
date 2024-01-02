import React, { useState } from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App()
{
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () =>
  {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () =>
  {
    setTooltipVisible(false);
  };

  return (
    <div className="App">
      <div className='buttonDiv'>
        <button className="btn-hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over me</button>
        {
          isTooltipVisible && <Tooltip position="bottom" />
        }

      </div>

    </div>
  );
}

export default App;
