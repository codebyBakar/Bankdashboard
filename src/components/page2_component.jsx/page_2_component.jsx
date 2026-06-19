import MonthlyBarChart from '../../charts/barchartpage2';
import balls from './../../images/balls.png';
import balls2 from './../../images/balls002.png';
import chip2 from './../../images/blackchip.png';
import chip from './../../images/chip.png';
import shadow from './../../images/shadow.png';
import Navbar from './navbar_component/navbar_component'
import { IoArrowUpCircleOutline,IoArrowDownCircleOutline  } from "react-icons/io5";
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa6";
import './page2.css'
const Page2 =()=>{
    return(<>
    <div className="mainpage2">
 <Navbar name="notbank"/>
 <div className="maindetail">
    <h2>My Cards</h2>

    <div className="sidedet">
        <p>+ Add Card</p>
        <h2>My Expense</h2>
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
           <MonthlyBarChart/>
    </div>
    
</div>

<div className="page2text">
   <p>Recent Transactions</p>
</div>

<div className="catogarytable">
    <p>All Transactions</p>
    <p>Income</p>
    <p>Expense</p>
</div>
<div className="underline">
<hr />
</div>

<div className="tablebox">
    <table>
        <tr>
        <th>Description</th>
        <th>Transation ID</th>
        <th>Type</th>
        <th>Card</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Reciept</th>
        <th></th>
        </tr>
    </table>

    <table>
        <tr>
        <td><span><IoArrowUpCircleOutline/></span> <a href="#">Spotify </a> </td>
        <td>#123456789</td>
        <td>Shopping</td>
        <td>1234*****</td>
        <td>28 Jan, 12:30 AM</td>
        <td>-$2500</td>
        <td><button>Download</button></td>
        </tr>
    </table>

    <table>
        <tr>
        <td><span><IoArrowDownCircleOutline/></span> Freepik Sales </td>
        <td>#123456789</td>
        <td>Transfer</td>
        <td>1234*****</td>
        <td>25 Jan, 10:40 PM</td>
        <td className='greentd'>+$750</td>
        <td><button>Download</button></td>
        </tr>
    </table>

     <table>
        <tr>
        <td><span><IoArrowUpCircleOutline/></span>  Services </td>
        <td>#123456789</td>
        <td>Service</td>
        <td>1234*****</td>
        <td>20 Jan, 10:40 PM</td>
        <td>-$150</td>
        <td><button>Download</button></td>
        </tr>
    </table>

     <table>
        
        <tr>
        <td><span><IoArrowUpCircleOutline/></span> <a href="#">Wilson</a> </td>
        <td>#123456789</td>
        <td>Transfer</td>
        <td>1234*****</td>
        <td>15 Jan, 3:29 PM</td>
        <td>-$1050</td>
        <td><button>Download</button></td>
        </tr>
    </table>

     <table>
        <tr>
        <td><span><IoArrowDownCircleOutline/></span> <a href="#">Emily</a> </td>
        <td>#123456789</td>
        <td>Transfer</td>
        <td>1234*****</td>
        <td>14 Jan, 10:40 PM</td>
        <td className='greentd' >+$840</td>
        <td><button>Download</button></td>
        </tr>
    </table>
</div>


<div className="tablebox-for-responsive">
    

    <table>
        <tr>
        <td><span><IoArrowUpCircleOutline/></span> <a href="#">Spotify </a> </td>
        
        <td>-$2500</td>
        
        </tr>
    </table>

    <table>
        <tr>
        <td><span><IoArrowDownCircleOutline/></span> Freepik Sales </td>
       
        <td className='greentd'>+$750</td>
       
        </tr>
    </table>

     <table>
        <tr>
        <td><span><IoArrowUpCircleOutline/></span>  Services </td>
       
        <td>-$150</td>
        
        </tr>
    </table>

     <table>
        
        <tr>
        <td><span><IoArrowUpCircleOutline/></span> <a href="#">Wilson</a> </td>

        <td>-$1050</td>
        </tr>
    </table>

     <table>
        <tr>
        <td><span><IoArrowDownCircleOutline/></span> <a href="#">Emily</a> </td>
       
        <td className='greentd' >+$840</td>
        </tr>
    </table>
</div>


<div className="nextpages">
<FaAngleLeft/> <p>Previuos</p> 
<div className="numbergap">
<div className="one"><p>1</p></div>
<div className="one"><p>2</p></div>
<div className="one"><p>3</p></div>
<div className="one"><p>4</p></div>
</div>
 <p>Next</p> <FaAngleRight/> 
</div>


 </div>
    </>)
}

export default Page2