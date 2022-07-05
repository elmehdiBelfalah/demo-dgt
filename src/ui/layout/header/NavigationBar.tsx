import React from "react";
import { Nav,NavLink,Bars,NavMenu,Navbtnlink} from "../header/NavbarElements";
import './NavigationBar.css'
import Logo from '../images/lettre-d.png'

const NavigationBar =()=>{
    return(

        <div>
        <Nav>
            <NavLink to='/'>
{/* <img src={Logo} alt="?" /> */}DigiTracker 
            </NavLink>
            {/* <Bars/> */}
        <NavMenu>
               <NavLink to='/'>
                About
               </NavLink>

               <NavLink to='/'>
                Servises
               </NavLink>

               <NavLink to='/'>
                ContactUs
               </NavLink>

               <NavLink to='/'>
                SingUp
               </NavLink>
        </NavMenu>
        <NavMenu>
               <NavLink to='/'>
                Search
               </NavLink>

               <NavLink to='/'>
                Notifications
               </NavLink>

               <NavLink to='/'>
                Messages
               </NavLink>

               <NavLink to='/'>
                User
               </NavLink>
        </NavMenu>
        {/* <Navbtnlink to='/' >SignIn</Navbtnlink> */}
        </Nav>
        
        </div>
    )

}
export {
    NavigationBar
}