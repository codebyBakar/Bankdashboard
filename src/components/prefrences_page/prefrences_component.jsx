import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import './prefrences.css'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
const Prefrences =()=>{
     const [currency, setCurrency] = useState("USD");
  const [timezone, setTimezone] = useState("(GMT-12:00) International Date Line West");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(true);
    return(<>
    <div className="prefrencespage">
      <Navbar/>
<div className="centerpageprefrence">
     <div className="preferences-container">
      <div className="tabs">
          <Link  to='/EditProfile' >
        <button className="tab">Edit Profile</button>
        </Link>

        <Link  to='/prefrences' >
        <button className="tab active ">Preferences</button>
        </Link>

         <Link  to='/security' >
        <button className="tab">Security</button>
        </Link>

      </div>

      <div className="preferences-content">
        <form>
          <div className="formgrid">
            <div className="form-group">
              <label>Currency</label>
              <input type="text" placeholder='USD' />
            </div>
            <div className="form-group">
              <label>Time Zone</label>
              <input type="text" placeholder='(GMT-12:00) International Date Line West' />
            </div>
          </div>

          <div className="notification-section">
            <h4>Notification</h4>
            <div className="notification-item">
              <div
                className={`toggle-switch ${toggle1 ? "active" : ""}`}
                onClick={() => setToggle1(!toggle1)}
              >
                <div className="circle"></div>
              </div>
              <span>I send or receive digital currency</span>
            </div>

            <div className="notification-item">
              <div
                className={`toggle-switch ${toggle2 ? "active" : ""}`}
                onClick={() => setToggle2(!toggle2)}
              >
                <div className="circle"></div>
              </div>
              <span>I receive merchant order</span>
            </div>

            <div className="notification-item">
              <div
                className={`toggle-switch ${toggle3 ? "active" : ""}`}
                onClick={() => setToggle3(!toggle3)}
              >
                <div className="circle"></div>
              </div>
              <span>There are recommendation for my account</span>
            </div>
          </div>

          <div className="save-btn-container">
            <button type="button" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
</div>
    </div>

    </>)
}

export default Prefrences
