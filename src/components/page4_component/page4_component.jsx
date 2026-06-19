import { FaChartPie } from 'react-icons/fa'
import { FaSackDollar, FaRepeat ,FaGoogle  } from 'react-icons/fa6'
import { BsApple } from "react-icons/bs";
import { SiTesla } from "react-icons/si";
import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import './page4.css'
import LineChartpg4 from '../../charts/linechartpage4'
import LineChart2pg4 from '../../charts/page4linechartno.2'
const Page4 =()=>{
    return(<>

    <div className="mainpage4">
         <Navbar/>

         <div className="centermainpage4">
           <div className="accountvalues">
    <div className="value01">
        <div className="valueicon01"><p><FaSackDollar/></p></div>
        <div className="valuetext">
            <p>Total Invested Amount</p>
            <p>$150,000</p>
        </div>
    </div>

    <div className="value01">
        <div className="valueicon02"><p><FaChartPie/></p></div>
        <div className="valuetext">
            <p>Number of Investments</p>
            <p>1,250</p>
        </div>
    </div>

    <div className="value01">
        <div className="valueicon03"><p><FaRepeat/></p></div>
        <div className="valuetext">
            <p>Rate of Return</p>
            <p>+5.80%</p>
        </div>
    </div>


</div>

<div className="graphtext04page">
    <h2>Yearly Total Investment </h2>
    <h2>Monthly Revenue </h2>
</div>


<div className="twolinechartflex">

<div className="yearlylinechart">
   <LineChartpg4/>
</div>

<div className="graphtext04page-forres">
   
    <h2>Monthly Revenue </h2>
</div>

<div className="monthlylinechart">
<LineChart2pg4/>
</div>

</div>


<div className="graphtext04pagedown">
    <h2>  My Investment </h2>
    <h2> Trending Stock </h2>
</div>

<div className="pahe4downbarsflex">


<div className="investmentbars">
    <div className="investbar1">
         <div className="bariconbox">
           <p><BsApple/></p>  
         </div>
         <div className="bartext1">
            <p>Apple Store</p>
            <p>E-commerce, Marketplace</p>
         </div>

         <div className="bartext2">
            <p>$54,000</p>
            <p>Envestment Value</p>
         </div>

         <div className="bartext3">
            <p>+16%</p>
            <p>Return Value</p>
         </div>

         
    </div>

     <div className="investbar1">
        <div className="bariconbox2">
           <p><FaGoogle/></p>  
         </div>
         <div className="bartext1">
            <p> Samsung Mobile</p>
            <p>E-commerce, Marketplace</p>
         </div>

         <div className="bartext2">
            <p>$25,300</p>
            <p>Envestment Value</p>
         </div>

         <div className="bartext03">
            <p>-4%</p>
            <p>Return Value</p>
         </div>
    </div>

     <div className="investbar1">
        <div className="bariconbox2 and3">
           <p><SiTesla/></p>  
         </div>
         <div className="bartext1 pushleft">
            <p> Tesla Motors</p>
            <p>Electric Vehicles</p>
         </div>

         <div className="bartext2 pushleft2">
            <p>$8,200</p>
            <p>Envestment Value</p>
         </div>

         <div className="bartext3">
            <p>+25%</p>
            <p>Return Value</p>
         </div>
    </div>
</div>

<div className="graphtext04pagedown-forres">

    <h2> Trending Stock </h2>
</div>

<div className="trendingstocks">
<div class="tablecard">
  <table class="customtable">
   
      <tr>
        <th>SL No</th>
        <th>Name</th>
        <th>Price</th>
        <th>Return</th>
      </tr>
   
    
      <tr>
        <td>01.</td>
        <td>Trivago</td>
        <td>$520</td>
        <td class="positive">+5%</td>
      </tr>
      <tr>
        <td>02.</td>
        <td>Canon</td>
        <td>$480</td>
        <td class="positive">+10%</td>
      </tr>
      <tr>
        <td>03.</td>
        <td>Uber Food</td>
        <td>$350</td>
        <td class="negative">-3%</td>
      </tr>
      <tr>
        <td>04.</td>
        <td>Nokia</td>
        <td>$940</td>
        <td class="positive">+2%</td>
      </tr>
      <tr>
        <td>05.</td>
        <td>Tiktok</td>
        <td>$670</td>
        <td class="negative">-12%</td>
      </tr>
    
  </table>
</div>

</div>


</div>



         </div>
    </div>
    
    
    </>)
}

export default Page4