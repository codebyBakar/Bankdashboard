import logopic from './../../images/wallet.png'
import './sidebar.css'
import { Link } from 'react-router-dom';

const SvgIcon = ({ children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>{children}</svg>
);

const HomeIcon = () => <SvgIcon><path d="M3 13h1v7c0 .6.4 1 1 1h5v-6h4v6h5c.6 0 1-.4 1-1v-7h1c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4.2.2.4.3.7.3z"/></SvgIcon>;
const TransferIcon = () => <SvgIcon className="rotate"><path d="M17 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm1.2 6.6c-.1.1-.2.1-.3.1h-1.8c-.1 0-.3-.1-.3-.3v-1.8c0-.3.2-.5.5-.5s.5.2.5.5v.8l1.2-1.2c.1-.1.2-.2.4-.2s.3.1.4.2c.2.2.2.5 0 .7l-1.1 1.1h.8c.3 0 .5.2.5.5s-.2.4-.5.4l-.3-.2zm-2.2-9.6c0-1.8 1.3-3.2 3-3.2s3 1.4 3 3.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.2-.9-2.2-2-2.2s-2 1-2 2.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5zm-3.3-1.1c-.1.2-.2.4-.2.6v1.4c0 .3.2.5.5.5s.5-.2.5-.5V8.8c0-.1.1-.2.1-.3l.1-.1c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1l-.4.3zM4 7c0-.6.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1zm0 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1zm0 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1z"/></SvgIcon>;
const UserIcon = () => <SvgIcon><path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-2c0-2.7-5.3-4-8-4z"/></SvgIcon>;
const TrendingUpIcon = () => <SvgIcon><path d="M16 6c-.6 0-1 .4-1 1s.4 1 1 1h1.6l-4.6 4.6-2.3-2.3c-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l4.3-4.3 2.3 2.3c.4.4 1 .4 1.4 0l5.3-5.3V11c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1h-4z"/></SvgIcon>;
const CreditCardIcon = () => <SvgIcon><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 6H4V8h16v2z"/></SvgIcon>;
const HandDollarIcon = () => <SvgIcon><path d="M11.5 9c-.3-.1-.5-.1-.8-.1-.9 0-1.7.3-2.4.8-.3.2-.4.6-.2.9.2.3.6.4.9.2.5-.3 1-.5 1.7-.5.5 0 .9.1 1.2.3.2.2.5.5.5 1 0 .4-.2.7-.4.9-.3.3-.7.5-1.2.6-.9.2-1.8.4-2.5 1-.7.6-1.1 1.4-1.1 2.4 0 .5.1.9.3 1.3.1.3.4.4.7.4.3 0 .6-.2.7-.5.1-.3.2-.5.2-.8 0-.5.2-.8.5-1.1.4-.4 1-.6 1.7-.7.7-.1 1.4-.3 2-.7.6-.4 1-1 1.1-1.8 0-.3.1-.6 0-.9v-.5c-.1-.7-.4-1.2-.8-1.7-.4-.4-.9-.7-1.4-.9zm.5 10c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-12c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"/></SvgIcon>;
const ToolsIcon = () => <SvgIcon><path d="M21.7 18.3l-4.6-4.6c.6-1.1.9-2.3.9-3.6 0-3.9-3.1-7-7-7-1.2 0-2.4.3-3.4.9l3.4 3.4-1.4 1.4-3.4-3.4C5.3 6.6 5 7.8 5 9c0 3.9 3.1 7 7 7 1.2 0 2.4-.3 3.4-.9l4.6 4.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4z"/></SvgIcon>;
const BulbIcon = () => <SvgIcon><path d="M12 2C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm-1 16v-2h2v2h-2zm0-4v-2h2v2h-2z"/></SvgIcon>;
const GearIcon = () => <SvgIcon><path d="M19.2 12.8c0-.3.1-.5.1-.8s0-.5-.1-.8l1.7-1.3c.2-.1.2-.4.1-.6l-1.6-2.8c-.1-.2-.4-.3-.6-.2l-2 .8c-.4-.3-.9-.6-1.4-.8L14.5 4c0-.2-.2-.4-.5-.4h-3.2c-.3 0-.5.2-.5.4l-.4 2.1c-.5.2-.9.5-1.4.8l-2-.8c-.2-.1-.5 0-.6.2L4.3 9.3c-.1.2 0 .5.2.6l1.7 1.3c0 .3-.1.5-.1.8s0 .5.1.8L4.5 14.1c-.2.1-.2.4-.1.6l1.6 2.8c.1.2.4.3.6.2l2-.8c.4.3.9.6 1.4.8l.4 2.1c0 .2.2.4.5.4h3.2c.3 0 .5-.2.5-.4l.4-2.1c.5-.2.9-.5 1.4-.8l2 .8c.2.1.5 0 .6-.2l1.6-2.8c.1-.2 0-.5-.2-.6l-1.7-1.3zM12 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></SvgIcon>;
const BackIcon = () => <SvgIcon><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"/></SvgIcon>;

const Sidebar =(props) => {



return(<>

   <div className={`sidebar ${props.clas}`} >

      <div onClick={props.showbar} className="crosslogo"> <p><BackIcon/></p> </div>

    <div className="logo">
        <img src={logopic} alt="" />
        <h1>BankDash. </h1>
    </div>
    <div className="menus">
       <Link  to='/' >
        <div onClick={()=> show('o1')} className="menu1 o1" >
          <p> <HomeIcon/></p> <p>Dashboard  </p>
        </div>
        </Link>
          <Link  to='/Transactions' > 
        <div onClick={()=> show('o2')} className="menu1 o2"  >
        <p className='rotate'> <TransferIcon/></p> <p>Transactions</p>
        </div>
        </Link>

         <Link  to='/accounts' > 
        <div onClick={()=> show('o3')}  className="menu1 o3">
           <p> <UserIcon/></p> <p>Accounts</p>
        </div>
        </Link>


         <Link  to='/Investments' >
        <div onClick={()=> show('o4')} className="menu1 o4">
           <p> <TrendingUpIcon/></p> <p>Investments</p>
        </div>
        </Link>


         <Link  to='/debitcards' >
        <div onClick={()=> show('o5')} className="menu1 o5">
           <p> <CreditCardIcon/></p> <p>Credit Cards</p>
        </div>
        </Link>


          <Link  to='/loans' >
        <div onClick={()=> show('o6')} className="menu1 o6">
           <p> <HandDollarIcon/></p> <p>Loans</p>
        </div>
        </Link>

         <Link  to='/services' >
        <div onClick={()=> show('o7')} className="menu1 o7">
           <p> <ToolsIcon/></p> <p>Services</p>
        </div>
        </Link>

        <Link  to='/previleges' >
        <div onClick={()=> show('o8')} className="menu1 o8">
           <p> <BulbIcon/></p> <p>My Privileges</p>
        </div>
       </Link>

         <Link  to='/settings' >
      <div onClick={()=> show('o9')} className="menu1 o9">
           <p> <GearIcon/></p> <p>Setting</p>
        </div>
         </Link>

    </div>
</div>

</>)

}

export default Sidebar