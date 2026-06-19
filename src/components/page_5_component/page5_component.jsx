import Navbar from '../page2_component.jsx/navbar_component/navbar_component'
import balls from './../../images/balls.png';
import balls2 from './../../images/balls002.png';
import chip2 from './../../images/blackchip.png';
import chip from './../../images/chip.png';
import shadow from './../../images/shadow.png';
import './page5.css'
import DonutChartpg5 from '../../charts/page_5_donutchart';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { CiCreditCardOff,CiLock  } from "react-icons/ci";
import { RiGoogleLine } from "react-icons/ri";
import { LiaApple } from "react-icons/lia";

const Page5 =()=>{
    return(<>
    <div className="mainpage5">
     <Navbar/>

<div className="centerpage5">


     <div className="pg5cardtext">
          <h2>My Cards</h2>
     </div>

<div className="cards ">

<div className="card01">
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
    
</div>

<div className="pahe5cardtexts">
    <h2>Card Expense Statistics</h2>
    <h2>Card List</h2>
</div>


<div className="page5chartflex">
    <div className="donutchart">
<DonutChartpg5/>
    </div>

<div className="pahe5cardtexts-forres">
    <h2>Card List</h2>
</div>

<div className="cardlists">

        <div className="pg5list1">
    <div className="listicon">
          <p><FaMoneyCheckDollar/></p>
    </div>
    <div className="listetxt1">
           <p>Card Type</p>
           <p>Secondary</p>
    </div>

    <div className="listetxt1">
        <p>Bank</p>
        <p>DBL Bank</p>
    </div>

    <div className="listetxt1">
        <p>Card Number</p>
        <p>**** **** 5600</p>
    </div>

    <div className="listetxt1 listtextforres">
        <p>Namain Card</p>
        <p>William </p>
    </div>

    <div className="listetxt01">
        <a href="#">View Details</a>
    </div>
      </div>


       <div className="pg5list1">


    <div className="listicon listpinkic">
          <p><FaMoneyCheckDollar/></p>
    </div>
    <div className="listetxt1">
           <p>Card Type</p>
           <p>Secondary</p>
    </div>

    <div className="listetxt1">
        <p>Bank</p>
        <p>DBL Bank</p>
    </div>

    <div className="listetxt1">
        <p>Card Number</p>
        <p>**** **** 5600</p>
    </div>

    <div className="listetxt1 listtextforres">
        <p>Namain Card</p>
        <p>William </p>
    </div>

    <div className="listetxt01">
        <a href="#">View Details</a>
    </div>
      </div>


       <div className="pg5list1">


    <div className="listicon listyellowico">
          <p><FaMoneyCheckDollar/></p>
    </div>
    <div className="listetxt1">
           <p>Card Type</p>
           <p>Secondary</p>
    </div>

    <div className="listetxt1">
        <p>Bank</p>
        <p>DBL Bank</p>
    </div>

    <div className="listetxt1">
        <p>Card Number</p>
        <p>**** **** 5600</p>
    </div>

    <div className="listetxt1 listtextforres">
        <p>Namain Card</p>
        <p>William </p>
    </div>

    <div className="listetxt01">
        <a href="#">View Details</a>
    </div>
      </div>



</div>
</div>

<div className="pahe5cardtexts01">
    <h2>  Add New Card</h2>
    <h2>Card Setting </h2>
</div>
     
<div className="formsflex">
<div className="page5form">
       <div className="card-form">
      <p className="description">
        Credit Card generally means a plastic card issued by Scheduled Commercial
        Banks assigned to a Cardholder, with a credit limit, that can be used to
        purchase goods and services on credit or obtain cash advances.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label>Card Type</label>
          <input type="text" placeholder="Classic" />
        </div>
        <div className="form-group">
          <label>Name On Card</label>
          <input type="text" placeholder="My Cards" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Card Number</label>
          <input type="password" placeholder="**** **** **** ****" />
        </div>
        <div className="form-group">
          <label>Expiration Date</label>
          <input type="text" placeholder="25 January 2025" />
        </div>
      </div>

      <button className="btn">Add Card</button>
    </div>
</div>

<div className="pahe5cardtexts01forres">
    <h2>Card Setting </h2>
</div>

<div className="cardsetting">
<div className="cardsetvalue1">
     <div className="cardseicon1">
       <p><CiCreditCardOff/></p>
    </div>

     <div className="valuetext1">
              <p>Block Card</p>
              <p>Instantly block your card</p>
     </div>
</div>

<div className="cardsetvalue1">
     <div className="cardseicon1 setblue">
       <p><CiLock/></p>
    </div>

     <div className="valuetext1">
              <p>Change Pic Code </p>
              <p>Withdraw without any card   </p>
     </div>
</div>

<div className="cardsetvalue1">
     <div className="cardseicon1 setpink">
       <p><RiGoogleLine/></p>
    </div>

     <div className="valuetext1">
              <p> Add to Google Pay</p>
              <p>Withdraw without any card </p>
     </div>
</div>

<div className="cardsetvalue1">
     <div className="cardseicon1 setgreen1">
       <p><LiaApple/></p>
    </div>

     <div className="valuetext1">
              <p> Add to Apple Pay</p>
              <p>Withdraw without any card </p>
     </div>
</div>

<div className="cardsetvalue1">
     <div className="cardseicon1 setgreen1">
       <p><LiaApple/></p>
    </div>

     <div className="valuetext1">
              <p> Add to Apple Pay</p>
              <p>Withdraw without any card </p>
     </div>
</div>
</div>


</div>

</div>
</div>   
    
    </>)
}

export default Page5