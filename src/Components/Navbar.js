import {FaBars,FaTimes} from 'react-icons/fa' 
import './Navbar.css'
function Navbar(){
    return (
        <header>
            <h2><img src="white-rubixe-logo.png " class="image" alt=""/></h2> 
            <nav>
                <a href ='/#'>Home</a> 
                <a href ='/#'>Services</a>
                <a href ='/#'>Product</a> 
                <a href ='/#'>About us</a> 
                
            </nav>
        </header>
    )
} 
export default Navbar