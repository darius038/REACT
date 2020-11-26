import{BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../home/Main";
import Forms from "../form/Forms";
import Footer from "../footer/Footer";


function App() {
    return(
        <BrowserRouter>
            <div className="app container bg-light">
                <Header />
                <Nav />
                <Switch>
                    <Route exact path="/" component = {Main}/>
                    <Route path="/form" component = {Forms}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App;