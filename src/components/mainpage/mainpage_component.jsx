import './mainpage.css'
import {  BsWindowStack,BsCoin  } from "react-icons/bs";
import { PiPaypalLogoDuotone } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import shadow from './../../images/shadow.png'
import chip from './../../images/chip.png'
import balls from './../../images/balls.png'
import chip2 from './../../images/blackchip.png'
import balls2 from './../../images/balls002.png'
import Navbar from '../page2_component.jsx/navbar_component/navbar_component';
import Barchart from '../../charts/barchart';
import PolarChart from '../../charts/piechart';
import SmoothLineChart from '../../charts/linechart';
const Mainpage = ()=>{

    
  
return(<>

<div className="mainpage">
<Navbar/>


<div className="centermainpage">

<div className="maindetail">
    <h2>My Cards</h2>

    <div className="sidedet">
        <p>See All</p>
        <h2>Recent Transaction</h2>
        

        
    </div>
   

</div>

<div className="cards">


    <div className="card1">
<div className="shadow"><img src={shadow} alt="" /></div>
<div className="flex1">
<div className="amaount">
    <p>Balance</p>
<p>$5,756</p>
</div>
<div className="chip">
    <img src={chip} alt="" />
</div>
</div>

<div className="flex2">
    <div className="name">
        <p>CARD HOLDER</p>
        <p>Abubaker Ghaffar</p>
    </div>
    <div className="date">
        <p>VALID THRU</p>
        <p>12/22</p>
    </div>
</div>

<div className="flex3">
    <p>3778 **** **** 1234</p>
    <img src={balls} alt="" />
</div>
    </div>



    <div className="card2">
       
<div className="flex01">
<div className="amaount2">
    <p>Balance</p>
<p>$5,756</p>
</div>
<div className="chip2">
    <img src={chip2} alt="" />
</div>
</div>

<div className="flex02">
    <div className="name2">
        <p>CARD HOLDER</p>
        <p>Abubaker Ghaffar</p>
    </div>
    <div className="date2">
        <p>VALID THRU</p>
        <p>12/22</p>
    </div>
</div>

<div className="flex03">
    <p>3778 **** **** 1234</p>
    <img src={balls2} alt="" />
</div>
    </div>



    <div className="card3">
            <div className="digitalpay1">
                  <div className="digital-logo1">
                       <p><BsWindowStack/></p>
                  </div>
                  <div className="digitext">
                    <p>Deposit from my Card</p>
                    <p>28 January 2021</p>
                  </div>
                  <div className="minus">
                    <p>-$850</p>
                  </div>
            </div>

            <div className="digitalpay1">
                  <div className="digital-logo2">
                      <p><PiPaypalLogoDuotone/></p>
                  </div>
                   <div className="digitext2">
                    <p>Deposit Paypal</p>
                    <p>25 January 2021</p>
                  </div>
                  <div className="plus">
                    <p>+$2,500</p>
                  </div>
            </div>

             <div className="digitalpay1">
                  <div className="digital-logo3">
                      <p><BsCoin/></p>
                  </div>
                   <div className="digitext3">
                    <p>Jemi Wilson</p>
                    <p>21 January 2021</p>
                  </div>
                  <div className="plus">
                    <p>+$5,400</p>
                  </div>
            </div>
    </div>
    
</div>

<div className="graphtext">
    <h2>Weekly Activity</h2>
    <h2>Expense Statistics</h2>
</div>

<div className="flexgraph">

<div className="bargraph">
  
  <Barchart/>
   
</div>

<div className="graphtext-forresponsive">
   
    <h2>Expense Statistics</h2>
</div>

<div className="piechart">
    <div >
     <PolarChart/>
     </div>
</div>

</div>

<div className="graphtext2">
    <h2>Quick Transfer</h2>
    <h2> Balance History</h2>
</div>

<div className="flexingbox">
    <div className="accounts">
        <div className="flexingaccounts">

        <div className="acc1">
            <div className="accpic1"></div>
            <p className='ptag1'>Livia Bator</p>
            <p className='ptag2'>CEO</p>
        </div>

         <div className="acc1">
            <div className="accpic2"></div>
            <p className='ptag1'>Randy Press</p>
            <p className='ptag2'>Director</p>
        </div>

         <div className="acc1">
            <div className="accpic3"></div>
            <p className='ptag1'>Workman</p>
            <p className='ptag2'>Designer</p>
        </div>

        </div>
<div className="flexingbtnsandtext">
        <div className="textamount">
            <p>Write Amount</p>
        </div>

        <div className="twosndbtns">
            <div className="graybtn"><p>525.50</p></div>
            <div className="bluebtn"><p>Send</p> <p><FaRegPaperPlane/></p></div>
        </div>
</div>

<div className="nextarrow">
<p><FaAngleRight/></p>
</div>
    </div>

<div className="graphtext2-for-responsive">
    <h2> Balance History</h2>
</div>
    <div className="linegraph">
        <SmoothLineChart/>
    </div>
</div>

</div>

</div>
</>)
}

export default Mainpage