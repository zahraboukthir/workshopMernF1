import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProdDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const details = useSelector((state) => state.prod.details);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={details.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={details.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Category : {details.category}
        </Typography>

        <Typography paragraph>Description:</Typography>
        <Typography paragraph>{details.description}</Typography>
        <Typography paragraph>Price: {details.price} dt</Typography>
        <Typography paragraph>
          {details.disponible ? (
            <Typography>
              IN Stock <br />
              Quantity :{details.qteS}
            </Typography>
          ) : (
            "FIN Stock"
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
