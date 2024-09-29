import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const languagesList = ['English', 'French', 'Arabic', 'Dutch', 'Spanish', 'Portuguese', 'Italian'];

const ScriptSettingsModal = ({ open, onClose, onApply, initialTitle, initialLanguages = [] }) => {
  const [scriptTitle, setScriptTitle] = useState(initialTitle || '');
  const [selectedLanguages, setSelectedLanguages] = useState(initialLanguages);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [languagesToRemove, setLanguagesToRemove] = useState([]);

  useEffect(() => {
    if (open) {
      setScriptTitle(initialTitle || '');
      setSelectedLanguages(initialLanguages);
    }
  }, [open, initialTitle, initialLanguages]);

  const handleLanguageSwitch = (language) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.includes(language)
        ? prevSelectedLanguages.filter((lang) => lang !== language)
        : [...prevSelectedLanguages, language]
    );
  };

  const handleApply = () => {
    const toRemove = initialLanguages.filter((lang) => !selectedLanguages.includes(lang));
    if (toRemove.length > 0) {
      setLanguagesToRemove(toRemove);
      setOpenConfirmDialog(true);
    } else {
      applyChanges();
    }
  };

  const applyChanges = () => {
    onApply({
      scriptTitle,
      availableLanguages: selectedLanguages,
    });
    onClose();
    setOpenConfirmDialog(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <h3>Script Settings</h3>
        <TextField
          label="Script Title"
          fullWidth
          value={scriptTitle}
          onChange={(e) => setScriptTitle(e.target.value)}
          margin="normal"
        />
        <h4>Available Languages</h4>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {languagesList.map((language) => (
            <FormControlLabel
              key={language}
              control={
                <Switch
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageSwitch(language)}
                />
              }
              label={language}
              sx={{ mb: 1 }}
            />
          ))}
        </Box>
        <Stack direction="row" spacing={2} mt={3}>
          <Button variant="outlined" fullWidth onClick={onClose}>Close</Button>
          <Button variant="contained" fullWidth onClick={handleApply}>Apply</Button>
        </Stack>
        {/* Confirmation Dialog */}
        <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}>
          <DialogTitle>Remove Languages</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You are about to remove the following languages: {languagesToRemove.join(', ')}. This action will result in the loss of existing translations for these languages. Do you want to continue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenConfirmDialog(false)} color="primary">Cancel</Button>
            <Button onClick={applyChanges} color="secondary" autoFocus>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Modal>
  );
};

export default ScriptSettingsModal;
