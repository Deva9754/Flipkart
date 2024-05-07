import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./BecomeSeller.css";
const BecomeSeller = () => {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  const fetchCity = async (pincode) => {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    const data = await response.json();

    if (data[0].Status === "Success") {
      setCity(data[0].PostOffice[0].District);
      console.log();
      setPincode(data[0].PostOffice[0].Pincode);
    } else {
      setCity("");
      setErrorMessage("Invalid Pincode");
    }
  };

  const handleDisplay = () => {
    fetchCity(pincode);
  };
  return (
    <div>
      <div className="check">
        <div className="deliver">
          {" "}
          Deliver to : {city} - {pincode}
        </div>
        <Button onClick={handleOpen}>Check</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="pincode">
              {/* <div className="">Use pincode to check the delivery:</div> */}
              <div className="pincode-input">
                <TextField
                  label="Check your city"
                  variant="standard"
                  type="text"
                  id="pincodeInput"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <Button onClick={handleDisplay}>Check</Button>
              </div>
            </div>
            <div className="invalid-pin"> {errorMessage}</div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BecomeSeller;
