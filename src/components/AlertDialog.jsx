import * as React from "react";
import { useState } from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";

export default function AlertDialog({ open, setOpen, RFQ, setRFQ }) {
  const [vendorOpen, setVendorOpen] = useState(false);
  
  const vendors = ["Vendor 1", "Vendor 2", "Vendor 3"];

  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [specification, setSpecification] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [technicalDatasheet, setTechnicalDatasheet] = useState(null);
  const [qualityAssurancePlan, setQualityAssurancePlan] = useState(null);
  const [productComments, setProductComments] = useState("");
  const [selectedVendor, setSelectedVendor] = useState({});

  const handleFileUpload = (setter) => (event) => {
    const file = event.target.files[0];
    setter(file);
  };

  const handleSubmit = () => {
    if (
      !productName ||
      !size ||
      !specification ||
      !quantity ||
      !unit ||
      !selectedVendor
    ) {
      alert("Please fill all the required fields");
      return;
    }

    const formData = new FormData();

    // Append text fields
    formData.append("productName", productName);
    formData.append("size", size);
    formData.append("specification", specification);
    formData.append("quantity", quantity);
    formData.append("unit", unit);
    formData.append("productComments", productComments);
    formData.append("selectedVendor", selectedVendor);

    // Append files
    if (technicalDatasheet) {
      formData.append("technicalDatasheet", technicalDatasheet);
    }
    if (qualityAssurancePlan) {
      formData.append("qualityAssurancePlan", qualityAssurancePlan);
    }

    // Simulating form submission (replace with actual API endpoint)
    console.log("FormData Entries:");
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        className="sjfnjdsndsjnfdsjnfds,jfsnfk"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Product Dettails"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 600,
                margin: "auto",
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h2" textAlign="center">
                Product Form
              </Typography>

              {/* Product Name and Size */}
              <div className="flex flex-row w-full gap-2">
                <TextField
                  label="Product Name"
                  placeholder="Enter Product Name"
                  fullWidth
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <TextField
                  label="Size"
                  placeholder="Enter Size"
                  fullWidth
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>

              {/* Specification */}
              <TextField
                label="Specification"
                placeholder="Enter Specification"
                fullWidth
                multiline
                rows={4}
                value={specification}
                onChange={(e) => setSpecification(e.target.value)}
              />

              {/* Quantity and Unit */}
              <div className="flex flex-row w-full gap-2">
                <TextField
                  label="Quantity"
                  type="number"
                  placeholder="Enter Quantity"
                  fullWidth
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <TextField
                  label="Unit"
                  placeholder="Enter Unit (e.g., kg, pcs)"
                  fullWidth
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                />
              </div>

              {/* File Uploads */}
              <div className="flex flex-row w-full gap-2">
                <Button fullWidth variant="contained" component="label">
                  Upload Technical Datasheet
                  <input
                    hidden
                    accept=".pdf,.doc,.docx"
                    type="file"
                    onChange={handleFileUpload(setTechnicalDatasheet)}
                  />
                </Button>
                <Button fullWidth variant="contained" component="label">
                  Upload Quality Assurance Plan
                  <input
                    hidden
                    accept=".pdf,.doc,.docx"
                    type="file"
                    onChange={handleFileUpload(setQualityAssurancePlan)}
                  />
                </Button>
              </div>

              {/* Product Comments */}
              <TextField
                label="Product Comments"
                placeholder="Add your comments about the product"
                fullWidth
                multiline
                rows={4}
                value={productComments}
                onChange={(e) => setProductComments(e.target.value)}
              />

              {/* Vendors List (Dropdown) */}
              <TextField
                label="Vendor"
                select
                fullWidth
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
                helperText="Please select a vendor"
              >
                {vendors.map((vendor, index) => (
                  <MenuItem key={index} value={vendor}>
                    {vendor}
                  </MenuItem>
                ))}
              </TextField>

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
