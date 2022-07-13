import * as React from "react";

import { FixedSizeList } from "react-window";

import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  Modal,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #131313",
  boxShadow: 24,
  p: 4,
};

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Usuário ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
          Inscreva-se em nossa newsletter
        </Typography>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button onClick={handleOpen} sx={{ fontSize: 16 }}>
          Ver lista de inscritos
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              height: 400,
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <FixedSizeList
              height={400}
              width={360}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
