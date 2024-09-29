// material-ui
import { Typography } from '@mui/material';
import { IconClipboardText } from '@tabler/icons-react';

// project imports
import NavGroup from './NavGroup';
import menuItem from '../../../../menu-items';
import { useSelector, useDispatch } from 'react-redux';
import {getTextsForShow} from '../../../../store/selectors'

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const texts = useSelector((state) => getTextsForShow(state, 1)) || [];

  const textMenu = {
    id: 'Scenes',
    title: 'Scene Scripts',
    type: 'group',
    children : texts.map(({id, title}) => ({
      id,
      title,
      type: 'item',
      url: '/text/' + id,
      icon: IconClipboardText,
      breadcrumbs: false
    }))
  };
  
  

  return (<NavGroup key={textMenu.id} item={textMenu} />);
};

export default MenuList; 