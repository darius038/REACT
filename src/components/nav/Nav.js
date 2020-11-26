import { BsSearch } from "react-icons/bs";
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                               <NavLink className="nav-link" exact to="/">Home</NavLink><span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <li><NavLink className="nav-link" to="/form">Search</NavLink></li>
                            </li>

                        </ul>
                    </div>
                </nav>
    )
}
export default Nav;