// src/components/WerewolfTracker.jsx
import React from 'react';
import '../lib/WereCode'

function Werewolf() {
  return (
    <div className="container">
      {/* Health Tracker */}
      <div id="healthTracker">
        {/* Health Levels */}
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

      {/* Rugged Checkbox */}
      <label htmlFor="rug">Rugged</label>
      <input type="checkbox" name="rug" id="rug" />

      {/* Spendable Section */}
      <div id="spendable">
        {/* Gnosis and Will Input Ranges */}
        <label for="gnosis"><h2>Gnosis</h2></label>
        <input type="range" min="0" max="15" value="10" name="gnosisRange" id="gnosisRange">
        <label for="gValue" id="gValue">10</label><br />

        <label for="will"><h2>Will</h2></label>
        <input type="range" min="0" max="8" value="6" name="willRange" id="willRange">
        <label for="wValue" id="wValue">6</label><br />
      </div>

      {/* Rage Section */}
      <div id="rage">
        <h2>RAGE</h2>
        <h3 id="rageValue">0</h3>
          <label for="rageLVL">Rage Level</label>
          <input type="range" min="0" max="10" value="0" name="rangeLVL" id="rangeLVL">
        <div id="rageInfo">
          <table class="tg">
            <thead>
              <tr>
                <td class="tg-01ax"><h3>Regeneration</h3></td>
                <td class="tg-02ax"><p id="regValue">0</p></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-0lax"><h3>Additional Damage</h3></td>
                <td class="tg-02ax"><p id="addDmgValue">0</p></td>
              </tr>
              <tr>
                <td class="tg-0lax"><h3>Range Action</h3></td>
                <td class="tg-02ax"><p id="rageActValue">0</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Section */}
      <div id="form">
        <h2>Form</h2>
        <label for="phy"><h3>Physical Focus</h3></label><br>
        <label for="str">Strength</label><input type="checkbox" name="str" id="str"><br>
        <label for="dex">Dexterity</label><input type="checkbox" name="dex" id="dex"><br>
        <label for="sta">Stamina</label><input type="checkbox" name="sta" id="sta"><br>
        <br>
        <label for="formBreed"><h3>Form Breed</h3></label>
        <select name="formBreed" id="formBreed">
          <option value="0">Homid</option>
          <option value="1">Glabro</option>
          <option value="2">Crinos</option>
          <option value="3">Hispo</option>
          <option value="4">Lupus</option>
        </select>
        <p id="formText">Select Breed</p>
      </div>

      {/* Pools Section */}
      <div className="pools">
        <h2>Pools</h2>
        <div id="sDefense">
          <h3>Standard Pools</h3>
          <label for="dodge">Dodge: </label><label for="dodgeT" id="dodgeT">0</label>
          <label for="dodgeW">  Wild Card:</label><input type="number" name="dodgeW" value="0" step="1" id="dodgeW"></br>

          <label for="mentel">Mentel Will: </label><label for="mentelT" id="mentelT">0</label>/br>
          <label for="social">Social Will: </label><label for="socialT" id="socialT">0</label></br>
        </div>
        <div id="sAttack">
          <h3>Standard Attack Pools</h3>
          <label for="brawl">Brawl: </label><label for="brawlT" id="brawlT">0</label>
          <label for="brawlW">  Wild Card:</label><input type="number" name="brawlW" value="0" step="1" id="brawlW"></br>

          <label for="melee">Melee: </label><label for="meleeT" id="meleeT">0</label>
          <label for="meleeW">  Wild Card:</label><input type="number" name="meleeW" value="0" step="1" id="meleeW"></br>
        </div>
        <div id="poolValues">
          <h3>Values</h3>
          <label for="phyV">Physical</label><input type="number" id="phyV" name="phyV" value="0" step="1"></br>
          <label for="menV">Mentel</label><input type="number" id="menV" name="menV" value="0" step="1"></br>
          <label for="socV">Social</label><input type="number" id="socV" name="socV" value="0" step="1"></br>
          <br>
          <label for="dodgeV">Dodge</label><input type="number" id="dodgeV" name="dodgeV" value="0" step="1"><br/>
          <label for="brawlV">Brawl</label><input type="number" id="brawlV" name="brawlV" value="0" step="1"><br/>
          <label for="meleeV">Melee</label><input type="number" id="meleeV" name="meleeV" value="0" step="1"><br/>
          <label for="firearmsV">Firearms</label><input type="number" id="firearmsV" value="0" name="firearmsV" step="1"><br/>
        </div>
      </div>
    </div>
  );
};

export default Werewolf;
