//import statements
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();

    //function to navigate to home page
    const homePage = () =>{
        navigate("/");
    }

    //function to navigate to about page
    const aboutPage = () => {
        navigate("/aboutme");
    }

    //function to navigate to project page
    const projectsPage = () => {
        navigate("/projects");
    }

    return(
        <nav className="navigation">
            <button onClick={homePage} className="site-title">Andrew's Portfolio</button>
            <ul>
                <li><button onClick={aboutPage}>About</button></li>
                <li><button onClick={projectsPage}>Projects</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;