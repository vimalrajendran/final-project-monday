import React, { useState, useEffect } from "react";
import './App.css';
import { Button, Form } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import NoImg from './noImg2.jpg';
import axios from "axios";
import { Modal, show, ModalBody, ModalHeader, ModalTitle, ModalFooter } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Api_Url = 'http://localhost:8000/api/v1/search?ingr=green'

export default function MainDashboard() {
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const userid = localStorage.getItem("userid");
    console.log(firstname);
    console.log(lastname);
    console.log(userid);
    const [fooditems, setFooditems] = useState([]);
    useEffect(() => {
        fetch(Api_Url)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setFooditems(data.hints);
            })
    }, [])

    const [ingredient, setIngredient] = useState('');

    const searchFood = async (e) => {
        e.preventDefault();
        setFooditems([]);
        console.log("searching")
        try {
            // const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=cd959ef9&app_key=11ad6e69e841d133c8f824d0ebfd6fdd&nutrition-type=cooking&ingr=${ingredient}`
            const url = `http://localhost:8000/api/v1/search?ingr=${ingredient}`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setFooditems(data.hints);
        }
        catch (e) {
            console.log(e);
        }
    }

    const ItemBox = (props) => {
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
        // console.log(props.item)
        const user = localStorage.getItem("token");

        async function addToFavourite(){

            // <Alert severity="success">Item Added to the favourite list</Alert>
    
            let response = await axios.post('http://localhost:9000/api/favorite/addToFavorite',
            { 
              userid:userid,
              label:props.item.food.label,
              category:props.item.food.category,
              image:props.item.food.image,
              PROCNT:props.item.food.nutrients.PROCNT,
              FAT:props.item.food.nutrients.FAT,
              ENERC_KCAL:props.item.food.nutrients.ENERC_KCAL,
              CHOCDF:props.item.food.nutrients.CHOCDF
            },
            toast('Added to favourites', {
                position: "top-center",
                autoClose: 2000,
                type: "success",
                theme:"dark",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            );

          }

        return (
            <div className="card text-center bg-dark mb-1 mt-3">
                <div className="card-body">
                    <h4 style={{ 'color': "white" }}>{props.item.food.label}</h4>
                    {props.item.food.image !== undefined
                        ? <img className="card-img-top" style={{ width: "200px" }} src={props.item.food.image} />
                        :
                        <img className="card-img-top" style={{ width: "200px" }} src={NoImg} />
                    }

                    <div className="card-body">

                        <button type="button" className="btn btn-secondary" onClick={handleShow}>See Nutrients</button>
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                <ModalTitle></ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                {props.item.food.image !== undefined
                                    ? <img className="card-img-top" style={{ width: "200px" }} src={props.item.food.image} />
                                    :
                                    <img className="card-img-top" style={{ width: "200px" }} src={NoImg} />
                                }

                                <h1>{props.item.food.label}</h1>
                                <h5>{props.item.food.category}</h5>
                                <br></br>
                                <h3>Main Nutrients</h3>
                                <p>Protein : {props.item.food.nutrients.PROCNT} gm</p>
                                <p>FAts : {props.item.food.nutrients.FAT} gm</p>
                                <p>Energy : {props.item.food.nutrients.ENERC_KCAL} gm</p>
                                <p>Carbohydrates : {props.item.food.nutrients.CHOCDF} gm</p>
                                <p>Fiber : {props.item.food.nutrients.FIBTG} gm</p>

                            </ModalBody>
                            <ModalFooter>
                                {
                                    !user ? <div> </div>
                                    :
                                    <Button variant="danger" onClick={addToFavourite}>Add to Favourites</Button>
                                }
                                <Button variant="danger" onClick={handleClose}>Close</Button>
                            </ModalFooter>

                        </Modal>
                    </div>
                </div>
            </div>
        )

    }

    const changeHandler = (e) => {
        setIngredient(e.target.value);
        console.log(e.target.value);
    }

    let navigate = useNavigate();
    return (
        <div id="bg">

            <div id="main" className="d-flex flex-column justify-content-center align-items-center" >
                <h1 className='mb-5' style={{ 'fontSize': "120px", 'color': "white" }}><i>Eat Well Live Well</i></h1>
                <p style={{ 'color': "white", 'fontSize': "30px" }}>Search your Favourite Food Items here..</p>
                <Form className="d-flex" onSubmit={searchFood} >
                    <Form.Control style={{ 'width': "500px" }}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        name='ingr'
                        value={ingredient} onChange={changeHandler}></Form.Control>
                    <Button onClick={searchFood} variant="secondary" ><SearchIcon /></Button>
                </Form>
            </div>

            <div className="container">
                <div className="grid">
                    {
                        fooditems.map((item) =>
                            <ItemBox key={item.food.label} item={item} />)
                    }




                </div>


            </div>

        </div>
    );
}