import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Header from "./Header";
import Specials from "./Specials";

function Homepage(){
    return(
        <>
        <Header/>
        <CallToAction/>
        <Specials/>
        <CustomersSay/>
        <Chicago/>
        </>
    )
}

export default Homepage;