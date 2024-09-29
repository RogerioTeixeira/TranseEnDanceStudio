import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import ModalProvider from './modals/ModalProvider';

// routing
import router from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <ModalProvider>
          <NavigationScroll>
            <RouterProvider router={router} />
          </NavigationScroll>
        </ModalProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
