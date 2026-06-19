import Sidebar from "./components/sidebar/sidebar_component"
import Mainpage from './components/mainpage/mainpage_component'
import useScript from "./components/js_component_link/js_component_link"
import { BrowserRouter,  Route,  Routes  as Router } from "react-router-dom"
import Page2 from "./components/page2_component.jsx/page_2_component"
import Page3 from "./components/page_3_component/page_3_component"
import Page4 from "./components/page4_component/page4_component"
import Page5 from "./components/page_5_component/page5_component"
import Page6 from "./components/page6_component/page_6_component"
import Page7 from "./components/page7_component/page_7_component"
import Page8 from "./components/page_8_component/page_8_component"
import Prefrences from "./components/prefrences_page/prefrences_component"
import Securitypg from "./components/security_component/security_component"
function App() {
  useScript('script.js')

  return (
    
    <>


   <BrowserRouter>

  <Sidebar />

  <main className="main-content">
<Router>
         <Route   path="/"  element={<Mainpage/>} />
         <Route   path="/Transactions"  element={<Page2/>} />
         <Route   path="/accounts"  element={<Page3/>} />
         <Route   path="/Investments"  element={<Page4/>} />
         <Route   path="/debitcards"  element={<Page5/>} />
         <Route   path="/loans"  element={<Page6/>} />
         <Route   path="/services"  element={<Page7/>} />
         <Route   path="/previleges"  element={<Page3/>} />
         <Route   path="/settings"  element={<Page8/>} />
         <Route   path="/prefrences"  element={<Prefrences/>} />
         <Route   path="/EditProfile"  element={<Page8/>} />
         <Route   path="/security"  element={<Securitypg/>} />





</Router>
</main>
   </BrowserRouter>

    </>
  )
}

export default App



