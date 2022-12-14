import { Link,NavLink} from "react-router-dom";
import "./Css/index.css";
var cnt = 1;
function change(){
    let elem = document.getElementById("menu");
    elem.classList.toggle("change")

 if (cnt == 1){
    let menu = document.getElementById("mob-nav");
    menu.className="show";
    cnt -=1;
 }else{
    let menu = document.getElementById("mob-nav");
    menu.className="hide";
    cnt=1;
 }
}

function validate(x){
    document.getElementById("user_id").innerHTML=x.value+':';
}


function Nav(){
    return(
        <>
        <div id="desk-nav">
            <div className="flex">
              <Link to="/"><button>Home</button></Link> 
              <Link to="/courses"><button>Courses</button></Link> 
              <Link to="/Admission"><button>Admission</button></Link>  
              <Link to="/Login"><button>Login</button></Link> 
              <Link to="/Register"><button>Register</button></Link>  
              <Link to="/About"><button>About Us</button></Link> 
            </div>
        </div>
        <div id="menu" onClick={change}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <div id="mob-nav" className="hide">
            <Link to="/"><button>Home</button></Link> 
            <Link to="/courses"><button>Courses</button></Link> 
            <Link to="/Admission"><button>Admission</button></Link>  
            <Link to="/Login"><button>Login</button></Link> 
            <Link to="/Register"><button>Register</button></Link>  
            <Link to="/About"><button>About Us</button></Link> 
        </div>
    </>
    )
}
export default Nav;