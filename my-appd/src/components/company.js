import "../company.css"
import Page from "./pagination"
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import EditInfo from '../components/companyedit' 


const Company = () => {
    const [showbutton, setShowButton]= useState(false)
    const [searchField, setSearchField]= useState("")
    const [filterdata, setFilterdata]= useState("")
    const [itemId, setItemId]= useState()

    const showForm=()=>{
        setShowButton(true)
    }

    const searchdish= async()=>{
        const users = await axios.get('/alldishs');
        console.log("user", users)
        const result= users.data.data.filter((item)=> item.dishName == searchField)
        console.log("result", result)
        setFilterdata(result)
    }

    return (
        <>
            <h1>Welcome Dishes Management</h1>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="">
                        <h3>Dishes <button 
                        className="btn btn-danger" 
                        onClick={showForm}
                        style={{ borderRadius: "25px" }}> + Create</button></h3>
                    </div><br/>

                    <div className="form-outline">
                        <input id="search-input" 
                            type="search" className="form-control" 
                            placeholder="Search Dish..." 
                            onChange={(e) => setSearchField(e.target.value)}
                            style={{width:"250px", margin: "auto"}}  /><br/>
                        <button className="btn btn-info" onClick={searchdish}>Search</button>
                        
                        {console.log("page", filterdata)}
                        <div className="pagination">
                            <Page pagedata={filterdata} buttonShow={setShowButton}  itemEventId={setItemId}  /> 
                            
                            {console.log("itemId", itemId)}
                        </div>
                    </div>
                <div/>
            </div>
               
            </div>
                {showbutton? 
                <EditInfo elementId={itemId}/>
                : ""
            }
        </>
    )
}

export default Company;