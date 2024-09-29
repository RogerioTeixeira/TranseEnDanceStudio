import React, { useState, useMemo, useEffect , useCallback} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { setScript, updateText , addText , updateRowMode, deleteText , addSubtitle} from '../../store/actions';
import {getCurrenntText ,getSubtitlesForText} from '../../store/selectors'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';


import MainCard from '../../ui-component/cards/MainCard';
import ScriptSettingsModal from '../../modals/ScriptSettingsModal';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const initialRows = [
  {
    id: 10,
    english: 'hello'
  },
];



const ScriptPage = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const { id: textId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const subtitles = useSelector((state) => getSubtitlesForText(state, textId))
  
  const [openModal, setOpenModal] = useState(false);
   
  useEffect(() => {
    console.log('effect  generc=>', subtitles);
    setRowModesModel((oldModel) => subtitles?.reduce((acc, {id}) => ({...acc , [id]: { mode: GridRowModes.View, fieldToFocus: 'english' }}), {} ))
  }, []); 

  useEffect(() => {
    console.log('effect=>', subtitles);
    
  }, [subtitles]);

  useEffect(() => {
    console.log('effect=>', subtitles);
    setRowModesModel((oldModel) => subtitles?.reduce((acc, {id}) => ({...acc , [id]: { mode: GridRowModes.View, fieldToFocus: 'english' }}), {} ))
  }, []); 

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (rowid) => () => {
    setRowModesModel((oldModel) => ({...oldModel , [rowid]: { mode: GridRowModes.Edit, fieldToFocus: 'english' }}), {} )
  };

  const handleSaveClick = (rowid) => () => {
    setRowModesModel((oldModel) => ({...oldModel , [rowid]: { mode: GridRowModes.View, fieldToFocus: 'english' }}), {} )
  };

  const handleDeleteClick = (rowId) => () => {
    dispatch(deleteText(textId, rowId));
  };

  const handleCancelClick = (rowid) => () => {
    setRowModesModel((oldModel) => ({...oldModel , [rowid]: { mode: GridRowModes.View, ignoreModifications: true }}), {} )

   /* const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }*/
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    dispatch(updateText(id, updatedRow));
    return updatedRow;
  };

  const EditToolbar = (props) => {
    
     const handleClick = () => {
       const row = { id: randomId(), english: '', french:'' , arabic:'', isNew: true }
       dispatch(addSubtitle(textId, row));
       setRowModesModel((oldModel) => ({
         ...oldModel,
         [row.id]: { mode: GridRowModes.Edit, fieldToFocus: 'english' },
       }));
     };
    
     return (
       <GridToolbarContainer>
         <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
           Add record
         </Button>
       </GridToolbarContainer>
     );
   }


  const handleRowModesModelChange = useCallback((newRowModesModel) => {
    console.log("newRowModesModel:", newRowModesModel)
    
  }, []);

  const columns = [
    { field: 'english', headerName: 'English', flex: 1, editable: true },
    { field: 'french', headerName: 'French', flex: 1, editable: true },
    { field: 'arabic', headerName: 'Arabic', flex: 1, editable: true },
    
    
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <MainCard title={'scriptTitle'}>
      <Typography variant="body2">id: {textId}</Typography>
      <Box mt={2}>
        <h4>Editing Act</h4>

        {/* DataGrid per i sottotitoli */}
        <Box style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={subtitles}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slots={{
              toolbar: EditToolbar,
            }}
            slotProps={{
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </Box>
      </Box>

      
    </MainCard>
  );
};

export default ScriptPage;
