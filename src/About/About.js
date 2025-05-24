
import { Link } from 'react-router-dom'
function About(){
   return(
     <div className="app">
         <nav>
            <ul>
               <Link to="/">Home</Link>
               <br/>
               <Link to="/new">New</Link>
               <br/>
               <Link to="/contact">Contact</Link>
               <br/>
            </ul>
           </nav>
     </div>
   )
}
export default About