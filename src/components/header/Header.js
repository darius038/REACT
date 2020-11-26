import "./header.scss"

function Header(){
    return(
        <header>
            <img src={"1.png"}
                 className="d-inline-block align-top m-2" width="70" alt="logo" loading="lazy"></img>
            <h1 className="d-inline-block align-top m-3">Movie App</h1>
        </header>
    )
}

export default Header;