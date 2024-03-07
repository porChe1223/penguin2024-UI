import { Modal, Button } from "@mui/material";
import { MUILoginForm } from "./MUILoginForm";
import { useState } from "react";

export const ModalLoginForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        ログイン
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MUILoginForm />
      </Modal>
    </>
  );
};
