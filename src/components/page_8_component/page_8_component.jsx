import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import './page8.css'
import { FaPencil } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Page8 =()=>{
    return(<>
    <div className="mainpage8">
        <Navbar/>
        <div className="centpage8">
               <div className="profile-container">
      <div className="tabs">
        
         <Link  to='/EditProfile' >
        <button className="tab active">Edit Profile</button>
        </Link>

        <Link  to='/prefrences' >
        <button className="tab ">Preferences</button>
        </Link>

         <Link  to='/security' >
        <button className="tab">Security</button>
        </Link>

        
      </div>

      <div className="profilecontent">
        <div className="profile-left">
          <div className="profile-pic">
           
            <div className="edit-icon">
                <p><FaPencil/></p>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <form>
            <div className="formgrid">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Charlene Reed" />
              </div>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" placeholder="Charlene Reed" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="charlenereed@gmail.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="**********" />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" placeholder="25 January 1990" />
              </div>
              <div className="form-group">
                <label>Present Address</label>
                <input type="text" placeholder="San Jose, California, USA" />
              </div>

              <div className="form-group">
                <label>Permanent Address</label>
                <input type="text" placeholder="San Jose, California, USA" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="San Jose" />
              </div>

              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="45962" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
            </div>

            <div className="save-btn-container">
              <button className="save-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    </div>
    </>)
}

export default Page8