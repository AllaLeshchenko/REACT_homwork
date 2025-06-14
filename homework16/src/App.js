import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Мое приложение на Material UI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Контейнер с основным содержимым */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалог
        </Button>

        {/* Диалоговое окно */}
        <Dialog open={open} onClose={handleClose}>
  <DialogTitle>Подтверждение действия</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Вы уверены, что хотите продолжить? Это действие нельзя будет отменить.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Отмена
    </Button>
    <Button onClick={() => {
      alert('Вы согласились!');
      handleClose();
    }} color="primary" autoFocus>
      Согласен
    </Button>
  </DialogActions>
</Dialog>
      </Container>
    </div>
  );
}

export default App;