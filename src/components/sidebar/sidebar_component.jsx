import logopic from './../../images/wallet.png'
import { TiHome } from "react-icons/ti";
import { FaMoneyBillTransfer,FaMoneyBillTrendUp ,FaHandHoldingDollar,FaUser   } from "react-icons/fa6";
import { BsFillCreditCard2FrontFill,BsTools  } from "react-icons/bs";
import { IoIosBulb } from "react-icons/io";
import { PiGearFill } from "react-icons/pi";
import './sidebar.css'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Sidebar =(props)=>{



return(<>

   <div   className ={`sidebar ${props.clas}`} >

      <div onClick={props.showbar} className="crosslogo"> <p><MdOutlineKeyboardBackspace/></p> </div>

    <div className="logo">
        <img src={logopic} alt="" />
        <h1>BankDash. </h1>
    </div>
    <div className="menus">
       <Link  to='/' >
        <div onClick={()=> show('o1')} className="menu1 o1" >
          <p> <TiHome/></p> <p>Dashboard  </p>
        </div>
        </Link>
          <Link  to='/Transactions' > 
        <div onClick={()=> show('o2')} className="menu1 o2"  >
        <p className='rotate'> <FaMoneyBillTransfer/></p> <p>Transactions</p>
        </div>
        </Link>

         <Link  to='/accounts' > 
        <div onClick={()=> show('o3')}  className="menu1 o3">
           <p> <FaUser/></p> <p>Accounts</p>
        </div>
        </Link>


         <Link  to='/Investments' >
        <div onClick={()=> show('o4')} className="menu1 o4">
           <p> <FaMoneyBillTrendUp/></p> <p>Investments</p>
        </div>
        </Link>


         <Link  to='/debitcards' >
        <div onClick={()=> show('o5')} className="menu1 o5">
           <p> <BsFillCreditCard2FrontFill/></p> <p>Credit Cards</p>
        </div>
        </Link>


          <Link  to='/loans' >
        <div onClick={()=> show('o6')} className="menu1 o6">
           <p> <FaHandHoldingDollar/></p> <p>Loans</p>
        </div>
        </Link>

         <Link  to='/services' >
        <div onClick={()=> show('o7')} className="menu1 o7">
           <p> <BsTools/></p> <p>Services</p>
        </div>
        </Link>

        <Link  to='/previleges' >
        <div onClick={()=> show('o8')} className="menu1 o8">
           <p> <IoIosBulb/></p> <p>My Privileges</p>
        </div>
       </Link>

         <Link  to='/settings' >
      <div onClick={()=> show('o9')} className="menu1 o9">
           <p> <PiGearFill/></p> <p>Setting</p>
        </div>
         </Link>

    </div>
</div>

</>)

}

export default Sidebar