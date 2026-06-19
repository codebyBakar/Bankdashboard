import { BsGear } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import './navbar.css'
import { useState } from "react";
import Sidebar from "../../sidebar/sidebar_component";

const Navbar =()=>{
     
const [number , setNumber] = useState(false)

const showbar = ()=>{

setNumber(!number)

}


return(<>

<div className="sideinnav">
 
 <Sidebar  clas={number ? 'show' : 'hide'} 
  showbar={showbar} />

</div>

   <div  className="navbar">
      <div onClick={showbar}  className="res-baricon"><p><FaBars/></p></div>

     <div  className="logo001"><h1>Overview  </h1></div>  
   
     <div  className="searchandprof">
       <div className="searchbar">
         <span className="material-symbols-outlined">search</span>
           <input type="text " placeholder='Search for something' />
       </div>
       <div className="settings">
              <p><BsGear/></p>
       </div>
       <div className="bellicon">
          <span className="material-symbols-outlined">notifications_unread</span>
       </div>
       <div  className="profilepic">
          
       </div>
     </div>
   </div>
<div className="forserponsive-search">
    <div className="searchbar-no2">
         <span className="material-symbols-outlined">search</span>
           <input type="text " placeholder='Search for something' />
       </div>
</div>       
    </>)
}

export default Navbar