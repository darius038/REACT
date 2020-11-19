import { BsSearch } from "react-icons/bs";

function Nav(){
    return(
        <nav className="row">
            <div className="input-group mb-3 col-6">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                <div className="input-group-append">
                    <span className="input-group-text btn" id="basic-addon1"><BsSearch className="input-group-btn"></BsSearch></span>
                </div>
            </div>

        </nav>
    )
}
export default Nav;