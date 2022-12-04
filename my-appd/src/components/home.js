import { useNavigate, NavLink } from "react-router-dom";
import '../index.css'

const Home=()=>{

    return (
        <>
        <h1>Welcome Dish Management</h1>
            {/* <button className="btn btn-success" > Register </button> */}
            <div className="main">
                <NavLink to={'/createquestion'} className="btn btn-danger">Create Survey</NavLink>
            </div> 
            <div className="main">
                <NavLink to={'/view'} className="btn btn-danger">Take Survey</NavLink>
            </div>

            <div className="main">
                <NavLink to={'/github'} className="btn btn-danger">Github</NavLink>
            </div>            
        </>
    )
}

export default Home;
