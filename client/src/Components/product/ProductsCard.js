import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getProdDetails } from "../../js/actions/productActions";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function ProductsCard({ prod }) {
  // console.log(prod)
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser && currentUser.role);
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={prod.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prod.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity : {prod.qteS}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/products/details">
          <Button
            size="small"
            onClick={() => dispatch(getProdDetails(prod._id))}
          >
            See Details
          </Button>
        </Link>
        <Button size="small">Add To Cart</Button>
        {currentUser &&
        currentUser.role == "saler" &&
        currentUser._id == prod.user ? (
          <CardActions>
            {" "}
           <Link to='/products/edit' >
            <Button
              size="small"
              onClick={() => dispatch(getProdDetails(prod._id))}
            >
              <EditIcon />
            </Button></Link>
            <Button size="small">
              <DeleteIcon />
            </Button>{" "}
          </CardActions>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}
