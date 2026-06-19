import {   FaArrowUpShortWide } from 'react-icons/fa6'
import { FaUser,FaBriefcase ,FaTools  } from "react-icons/fa";
import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import './page6.css'
const Page6 =()=>{
    return(<>
   <div className="mainpage6">
       <Navbar/>
   <div className="centermainpage6"> 
       <div className="accountvalues">
   

    <div className="value1">
        <div className="valueicon02"><p><FaUser/></p></div>
        <div className="valuetextpg6">
            <p>Personal Loans</p>
            <p>$50,000</p>
        </div>
    </div>

     <div className="value1">
        <div className="valueicon01"><p><FaBriefcase/></p></div>
        <div className="valuetextpg6">
            <p>Corporate Loans</p>
            <p>$100,000</p>
        </div>
    </div>

    <div className="value1">
        <div className="valueicon03"><p><FaArrowUpShortWide/></p></div>
        <div className="valuetextpg6">
            <p>Business Loans</p>
            <p>$500,000</p>
        </div>
    </div>

    <div className="value1">
        <div className="valueicon04"><p><FaTools/></p></div>
        <div className="valuetextpg6">
            <p> Custom Loans</p>
            <p>Choose Money</p>
        </div>
    </div>
</div>

<div className="page6text">
    <h2>Active Loans Overview</h2>
</div>


<div className="page6form">
    <div className="container">
    <table className="loan-table">
      <thead>
        <tr>
          <th>SL No.</th>
          <th>Loan Money</th>
          <th>Left to repay</th>
          <th>Duration</th>
          <th>Interest rate</th>
          <th>Installment</th>
          <th>Repay</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01.</td>
          <td>$100,000</td>
          <td>$40,500</td>
          <td>8 Months</td>
          <td>12%</td>
          <td>$2,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>02.</td>
          <td>$500,000</td>
          <td>$250,000</td>
          <td>36 Months</td>
          <td>10%</td>
          <td>$8,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>03.</td>
          <td>$900,000</td>
          <td>$40,500</td>
          <td>12 Months</td>
          <td>12%</td>
          <td>$5,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>04.</td>
          <td>$50,000</td>
          <td>$40,500</td>
          <td>25 Months</td>
          <td>5%</td>
          <td>$2,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>05.</td>
          <td>$50,000</td>
          <td>$40,500</td>
          <td>5 Months</td>
          <td>16%</td>
          <td>$10,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>06.</td>
          <td>$80,000</td>
          <td>$25,500</td>
          <td>14 Months</td>
          <td>8%</td>
          <td>$2,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>07.</td>
          <td>$12,000</td>
          <td>$5,500</td>
          <td>9 Months</td>
          <td>13%</td>
          <td>$500/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>08.</td>
          <td>$160,000</td>
          <td>$100,800</td>
          <td>3 Months</td>
          <td>12%</td>
          <td>$800/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>09.</td>
          <td>$400,000</td>
          <td>$75,000</td>
          <td>25 Months</td>
          <td>12%</td>
          <td>$50,000/month</td>
          <td><button className="repay-button">Repay</button></td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$1,252,000</td>
          <td>$750,000</td>
          <td></td>
          <td></td>
          <td>$50,000/month</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>

  
</div>

</div>   
</div>
    </>)
}

export default Page6