import React, { useEffect, useState } from "react"
import _ from "lodash";
import * as ReactBootStrap from 'react-bootstrap'
import "../company.css"
import axios from 'axios'

const pageSize = 6
const Page = (props) => {

    const [post, setPost] = useState()
    const [paginationpost, setPaginationpost] = useState()
    const [currentPage, setCurrentpage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [showbutton, setShowButton]= useState(props.buttonShow)

    const userData = async () => {
        const users = await axios.get('/alldishs');
        console.log("user", users)
        let datas= users.data.data
        setPost(datas)
        // setPaginationpost((datas).slice(0).take(pageSize).value());
        setLoading(true)
        console.log("aijaj", props.pagedata)
        if(props.pagedata.length>0){
            setPaginationpost(props.pagedata)
        }   
    }

    const editInfo= (itemId)=>{
        setShowButton(true)

    }

    useEffect(() => {
        userData()
    }, [props.pagedata? props.pagedata: paginationpost])

    const pageCount = post ? Math.ceil(post.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) => {
        setCurrentpage(pageNo)
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedpost = _(post).slice(startIndex).take(pageSize).value()
        setPaginationpost(paginatedpost)
    }

    return (
        <div>
            <h4>All Dishes List</h4>
            {!paginationpost ? 
            <h5>Not Found Data</h5>: (
                <div class="maincontain">

                    {
                        paginationpost.map((post, index) => (
                            <div 
                                className="question" 
                                onClick={() => props.buttonShow(true)} >
                                <h5 onClick={() => props.itemEventId(`${post._id}`)}> {`${index + 1}.   ${post.dishName} `}</h5>
                            </div>
                            
                        ))
                    }
                </div>
            )}


            {/* pagination */}
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    {pages.map((page) =>
                        <li className={
                            page === currentPage ? "page-item active" : "page-item"
                        }>
                            <p className="page-link" onClick={() => pagination(page)}>{page}</p>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Page;