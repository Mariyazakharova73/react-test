import { CssBaseline } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.style.scss';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { routeConfig } from './routes/routes';
import { DRAWER_WIDTH } from './utils/constants';

export function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header toggleDrawer={handleDrawerToggle} />
      <SideBar
        closeDrawer={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Box sx={{ flexGrow: 1, width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
        <Toolbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.entries(routeConfig).map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
}
