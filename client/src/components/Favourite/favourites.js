
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import '../Main/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavouriteItems = () => {
  const [favlist, setFavlist] = useState([]);
  async function data() {
    try {
      let response = await axios.get(
        "http://localhost:9000/api/favorite/getFavorite",
        {
          params: { userid: localStorage.getItem("userid") },
        }
      );

      console.log(response);
      setFavlist(response.data.favoriteItemArr);
    } catch (error) {
      console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
    }
  }
  useEffect(() => {
    
    data();
  }, []);

  async function deleteFromFavourite(label) {
    console.log(label)
    let response = await axios.put(
      "http://localhost:9000/api/favorite/removeFavorite",
      {
        userid: localStorage.getItem("userid"),
        label: label,
      },
      {
        headers: {
            "Content-Type": "application/json"
        }, withCredentials: true

    },
    toast('Removed from favourites', {
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
    data();
    console.log(response.statusText);
    // if (response.statusText === "OK") {
      // props.onClick();
    // }
  }

  //  async function callback(){

  //   let response = await axios.get('http://localhost:9000/api/favorite/getFavorite',
  //   {
  //     params:{userid:localStorage.getItem("userid")} }
  //   );

  // console.log(response);
  // setVideo(response.data.favoriteItemArr);
  // }

  return (
    <div>
      <br></br>
      <div className="d-flex" style={{"justifyContent":'space-between'}}>
      <h1><i>Your Favourites</i></h1>
      <Button component={Link} className="float-right" to='/home'>Go Back</Button>
      </div>
      <div className="grid">
      {favlist.map((Item) => (
        <div key={Item.label}>
          <Card sx={{minHeight: 600}}>
            <CardActionArea sx={{minHeight: 700}}>
              <CardMedia
                component="img"
                height="240"
                image={Item.image}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {Item.label}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {Item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h5>Nutrients</h5>
                  <p>Protein:- {Item.PROCNT} gm</p>
                  <p>Fat:- {Item.FAT} gm</p>
                  <p>Energy:- {Item.ENERC_KCAL} gm</p>
                  <p>Carbs:- {Item.CHOCDF} gm</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <IconButton edge="end" onClick={()=>deleteFromFavourite(Item.label)}> Remove <DeleteIcon /></IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FavouriteItems;
