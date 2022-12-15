import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { getmyproducts } from "./../../../js/actions/userActions";
import { getProdDetails } from "../../../js/actions/productActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
// Generate Order Data
function createData(id, ProductTitle, qteS, price, category) {
  return { id, ProductTitle, qteS, price, category };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getmyproducts());
  }, []);
  const myproducts = useSelector((state) => state.user.myproducts);
  const rows = myproducts.map((el) =>
    createData(el._id, el.title, el.qteS, el.price, el.category)
  );
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ProductTitle</TableCell>
            <TableCell>qteS</TableCell>
            <TableCell>price</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.ProductTitle}</TableCell>
              <TableCell>{row.qteS}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.category}</TableCell>
              <Link to="/products/edit">
                <Button
                  size="small"
                  onClick={() => dispatch(getProdDetails(row._id))}
                >
                  <EditIcon />
                </Button>
              </Link>{" "}
              <Button size="small">
                <DeleteIcon />
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
