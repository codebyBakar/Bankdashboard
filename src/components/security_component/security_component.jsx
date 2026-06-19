import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import './security.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Securitypg =()=>{
      const [twoFactor, setTwoFactor] = useState(true);
  return(<>
  
  <div className="securitypg">
      <Navbar/>
<div className="centerpagesecurity">



<div className="security-container">
      <div className="tabs">
          <Link  to='/EditProfile' >
        <button className="tab">Edit Profile</button>
        </Link>

        <Link  to='/prefrences' >
        <button className="tab ">Preferences</button>
        </Link>

         <Link  to='/security' >
        <button className="tab active">Security</button>
        </Link>
      </div>

      <div className="security-content">
        <form>
          <div className="two-factor-section">
            <h4>Two-factor Authentication</h4>
            <div className="toggle-row">
              <div
                className={`toggle-switch ${twoFactor ? "active" : ""}`}
                onClick={() => setTwoFactor(!twoFactor)}
              >
                <div className="circle"></div>
              </div>
              <span>Enable or disable two factor authentication</span>
            </div>
          </div>

          <div className="password-section">
            <h4>Change Password</h4>
            <div className="formgrid">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="**********" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="**********" />
              </div>
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

export default Securitypg