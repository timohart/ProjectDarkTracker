import React, { useState } from 'react';

function Vampire() {
  const [bloodValue, setBloodValue] = useState(10);
  const [willValue, setWillValue] = useState(6);

  const handleBloodChange = (event) => {
    setBloodValue(event.target.value);
  };

  const handleWillChange = (event) => {
    setWillValue(event.target.value);
  };
  return (
    <div className="container">
      <div id="healthTracker">
        <div class="healthLevel" id="level1">
          <h3>Healthy</h3>
          <div class="healthSlots" id="level1Slots">
          </div>
        </div>
      
        <div class="healthLevel" id="level2">
          <h3>Injured</h3>
          <div class="healthSlots" id="level2Slots">
          </div>
        </div>
      
        <div class="healthLevel" id="level3">
          <h3>Incapacitated</h3>
          <div class="healthSlots" id="level3Slots">
          </div>
        </div>
      </div>
      <div id="spendable">
        <label htmlFor="blood">
          <h2>Blood</h2>
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={bloodValue}
          name="bloodRange"
          id="bloodRange"
          onChange={handleBloodChange}
        />
        <label htmlFor="bValue" id="bValue">
        {bloodValue}

        </label>
        <br />

        <label htmlFor="will">
        <h2>Will</h2>
        </label>
        <input
          type="range"
          min="0"
          max="8"
          value={willValue}
          name="willRange"
          id="willRange"
          onChange={handleWillChange}
        />
        <label htmlFor="wValue" id="wValue">
          {willValue}
        </label>
        <br />
        
      </div>
      <div className="pools">
        <h2>Pools Coming Soon...</h2>
      </div>
      <div className="traits">
      <h2>Traits</h2>
        <label htmlFor="gen">Generation</label>
        <select name="gen" id="gen">
          <option value="0">11th+</option>
          <option value="1">10th - 9th</option>
          <option value="2">8th</option>
          <option value="3">7th</option>
          <option value="4">6th</option>
        </select>
        <br />

        <label htmlFor="phy">
          <h3>Physical Focus</h3>
        </label>
        <br />

        <label htmlFor="str">Strength</label>
        <input type="checkbox" name="str" id="str" />
        <br />

        <label htmlFor="dex">Dexterity</label>
        <input type="checkbox" name="dex" id="dex" />
        <br />

        <label htmlFor="sta">Stamina</label>
        <input type="checkbox" name="sta" id="sta" />
        <br />
        <br />

        <label htmlFor="fort">Fortitude</label>
        <input type="checkbox" name="fort" id="fort" />
        <br />

        <label htmlFor="rug">Rugged</label>
        <input type="checkbox" name="rug" id="rug" />
      </div>
    </div>
  );
}

export default Vampire;

