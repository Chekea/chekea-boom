import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Cabezal from "./componentes/Cabezal";

const Contabilidad = () => {
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleAdd = () => {
    if (amount !== "" && !isNaN(amount)) {
      setEntries([
        { amount: parseFloat(amount), date: new Date() },
        ...entries,
      ]);
      setAmount("");
    }
  };

  const getTotal = () => {
    return entries.reduce((acc, entry) => acc + entry.amount, 0);
  };

  return (
    <Container style={{ marginTop: isMobile ? 65 : 10 }}>
      <Cabezal texto={"Contabilidad"} />

      <TextField
        label="Cantidad"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Axadir Cantidad
      </Button>
      <Table sx={{ marginTop: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.date.toLocaleString()}</TableCell>
              <TableCell>{entry.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <strong>{getTotal().toFixed(2)} XFA</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Contabilidad;
