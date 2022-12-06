import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditInfo=(props)=>{
    const [dishdata, setDishdata]= useState("")
    const [dishname, setDishname]= useState()

    

    const handleInputs= async(e)=>{
        console.log(e.target.value)
        setDishdata({...dishdata, [e.target.name]: e.target.value})  //[] dynamic data for
    }

    const saveDish= async(e)=>{
        e.preventDefault();
        const {dishName, ingrediants}= dishdata; 
        const dishInf={dishName, ingrediants}
        console.log("aijajdish", dishInf)
        let response;
        console.log("aijajkhan", props)
        if(props.elementId){
            response= await axios.put(`/updatedish/${props.elementId}`, {
                dishName: dishInf.dishName
            })
            console.log("response", response)
            toast.success('updated successfully', {autoClose:1000})
        }else{
            response= await axios.post('/adddish', dishInf)
            console.log("res", response)
            toast.success('dish add successfully', {autoClose:1000})
        }
    }

    const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'Red', label: 'Red' },
        { value: 'skyblue', label: 'skyblue' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'lightPink', label: 'lightPink' },
    ]

    const getElmentItem= async()=>{
        if(props.elementId){
            let response=await axios.get(`/dishdetails/${props.elementId}`)
            console.log("response", response)
            setDishname(response.data.data.dishName)
        }
    }
  


    useEffect(()=>{
        getElmentItem()
    }, [props.elementId])


    return (
        <>
        <div className="container">
                        <div className="col-6">
                        {console.log("aijajdishname", dishname)}
                        <div className="main" style={{ textAlign: "left", margin: "auto", padding: "30px 30px" }}>
                            <label> Name : </label> <br />
                            <input type="text"
                                name="dishName"
                                placeholder="Enter question here.."
                                // value={dishname}
                                onChange={handleInputs} />
                            <br/><br/>

                            <label> Muliti Items </label><br />
                            <Select 
                                defaultValue={[colourOptions[2], colourOptions[3]]}
                                isMulti
                                name="ingrediants"
                                options={colourOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            /><br/>
                            <button onClick={saveDish} className="btn btn-danger" padding="25px">Save</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default EditInfo;
                    