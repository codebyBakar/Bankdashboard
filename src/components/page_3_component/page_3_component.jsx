import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import { FaSackDollar,FaPiggyBank  } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiDocumentCurrencyDollar } from "react-icons/hi2"
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { LiaToolsSolid ,LiaApple } from "react-icons/lia";
import { LuUserRound } from "react-icons/lu";
import { RiPlaystationLine } from "react-icons/ri";

import './page3.css'
import balls from './../../images/balls.png';
import chip from './../../images/chip.png';
import shadow from './../../images/shadow.png';
import Page3barchart from '../../charts/page3_barchart';
const Page3 = ()=>{
return(<>
 <div className="mainpage3">

<Navbar/>
<div className="centermainpage3">
<div className="accountvalues">
    <div className="value1">
        <div className="valueicon1"><p><FaSackDollar/></p></div>
        <div className="valuetext">
            <p>My Balance</p>
            <p>$12,750</p>
        </div>
    </div>

    <div className="value1">
        <div className="valueicon2"><p><FaHandHoldingUsd/></p></div>
        <div className="valuetext">
            <p>Income</p>
            <p>$5,600</p>
        </div>
    </div>

    <div className="value1">
        <div className="valueicon3"><p><HiDocumentCurrencyDollar/></p></div>
        <div className="valuetext">
            <p>Expense</p>
            <p>$3,460</p>
        </div>
    </div>

    <div className="value1">
        <div className="valueicon4"><p><FaPiggyBank/></p></div>
        <div className="valuetext">
            <p>Total Saving</p>
            <p>$7,920</p>
        </div>
    </div>
</div>

<div className="maindetail2">
   

   
        <h2> My Card</h2>
       
   
    <div className="det2">
         <p> See All</p>
    </div>

</div>

<div className="page3cardsflex">
    <div className="page3card1">

       <div className="transactionflex1">
        <div className="transicon1">
            <IoNotificationsCircleOutline/>
        </div>
        <div className="transtext1">
            <h4>Spotify Subscription</h4>
            <p>25 Jan 2021</p>
            
        </div>
        <div className="transtext2">
            <p>Shopping</p>
        </div>

         <div className="transtext3">
            <p>1234 ****</p>
        </div>
        
         <div className="transtext4">
            <p> Pending </p>
        </div>

        <div className="transtext5">
            <p>-$150</p>
        </div>
       </div>


        <div className="transactionflex1">
        <div className="transicon2">
            <LiaToolsSolid/>
        </div>
        <div className="transtext1">
            <h4>Mobile Service</h4>
            <p>25 Jan 2021</p>
            
        </div>
        <div className="transtext2">
            <p>Service</p>
        </div>

         <div className="transtext3">
            <p>1234 ****</p>
        </div>
        
         <div className="transtext4">
            <p> Completed </p>
        </div>

        <div className="transtext5">
            <p>-$340</p>
        </div>
       </div>


        <div className="transactionflex1">
        <div className="transicon3">
            <LuUserRound/>
        </div>
        <div className="transtext1">
            <h4>Emilly Wilson</h4>
            <p>25 Jan 2021</p>
            
        </div>
        <div className="transtext2">
            <p>Transfer</p>
        </div>

         <div className="transtext3">
            <p>1234 ****</p>
        </div>
        
         <div className="transtext4">
            <p> Completed </p>
        </div>

        <div className="transtext05">
            <p>+$780</p>
        </div>
       </div>

    </div>

   
         <div className="card01">
<div className="shadow-pg3"><img src={shadow} alt="" /></div>
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
    


</div>

<div className="graphtextpage3">
    <h2> Debit & Credit Overview</h2>
    <h2>Invoices Sent </h2>
</div>

<div className="page3chartsflex">
<div className="page3barchart">
<Page3barchart/>
</div>

<div className="graphtextpage3-forres">
    
    <h2>Invoices Sent </h2>
</div>

<div className="page3invoicebox">
<div className="invoicevalueflex1">

<div className="iconandtext">
<div className="iconbox">
    <p><LiaApple /></p>
</div>
<div className="textbox">
    <p>Apple Store</p>
    <p>5h ago</p>
</div>

</div>

<div className="valuetext01">
<p>$450</p>
</div>

</div>


<div className="invoicevalueflex1">

<div className="iconandtext">
<div className="iconbox2">
<p> <LuUserRound/></p>
</div>
<div className="textbox">
    <p>Michael</p>
    <p>2 days ago </p>
</div>

</div>

<div className="valuetext01">
<p>$160</p>
</div>

</div>


<div className="invoicevalueflex1">

<div className="iconandtext">
<div className="iconbox3">
<p><RiPlaystationLine /></p>
</div>

<div className="textbox">
    <p>Playstation </p>
    <p>5 days ago </p>
</div>

</div>

<div className="valuetext01">
<p>$1085</p>
</div>

</div>


<div className="invoicevalueflex1">

<div className="iconandtext">
<div className="iconbox4">
<p><LuUserRound /></p>
</div>

<div className="textbox">
    <p> William</p>
    <p>10 days ago </p>
</div>

</div>

<div className="valuetext01">
<p>$90</p>
</div>

</div>
</div>


</div>

</div>
</div>

</>)


}

export default Page3