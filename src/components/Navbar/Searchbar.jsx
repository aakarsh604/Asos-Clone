import React, { useState, useEffect } from "react"
import { Form, FormControl,Button } from "react-bootstrap";
import {FaSearch} from "react-icons/fa"
import axios from "axios"
const Searchbar = () => {
    const [SearchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
            const API_URL = `http://localhost:8080/shoes/?title=${search}`
            axios
                .get(API_URL)
                .then(res => {
                    const contacts = res.data
                    setSearchData(contacts)
                    console.log(SearchData);
                })
        }, [search])   
        const onSubmit=()=>{
            console.log("contact:",SearchData);
            setSearch("");
        } 
    return (
        <>
            <Form className="d-flex form_controls">
                <FormControl
                    type="search"
                    placeholder="Search for items and brands here"
                    className="me-2 "
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
               <Button variant="outline-success" onClick={onSubmit} className="searchbtn"><FaSearch/></Button>
            </Form>

        </>
    )
}

export default Searchbar;