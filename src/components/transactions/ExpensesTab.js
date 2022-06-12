import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCookies } from 'react-cookie';
import { useEffect } from 'react'; 
import axios from 'axios';
function createData(date, details, category, amount, addedBy) {
  return { date, details, category, amount, addedBy};
}

const rows = [
  createData("1/9/22", "Rujak Enak", "Food", "$2", "Manually"),
  createData("1/9/22", "Sewa Lamborghini", "Transportation", "$40", "Upload"),
  createData("1/9/22", "Electricity", "Rent", "$150", "Manually"),];


const makeStyle=(status)=>{
  if(status === 'Manually')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Upload')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'black',
    }
  } 
}

export default function BasicTable() {
  const [cookie, setCookie] = useCookies("email");
  useEffect(async () => {
    const getUpdate = async() => {
      try{
        const res = await axios.get(`https://piggy-be.herokuapp.com/tx`, {headers:{"Authorization": cookie.token}, params:{"email": cookie.email, "type":"Expense"}});
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
      
    }
    await getUpdate();
  }, [])
  return (
      <div className="text-white">
      <h3>Expenses History</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>History</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Details</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">AddedBy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.details}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell> 
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.addedBy)}>{row.addedBy}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}