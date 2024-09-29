// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill , IconClipboardText } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconClipboardText
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'Scenes',
  title: 'Scene Scripts',
  type: 'group',
  children: [
    {
      id: '1',
      title: 'Storia di un massacro',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconClipboardText,
      breadcrumbs: false
    },
    {
      id: '2',
      title: 'Text 2',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconClipboardText,
      breadcrumbs: false
    },
    {
      id: '3',
      title: 'Text 3',
      type: 'item',
      url: '/script/1',
      icon: icons.IconClipboardText,
      breadcrumbs: false
    }
  ]
};

export default utilities;
