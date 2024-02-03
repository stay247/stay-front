import React from 'react';
import "../assets/styles/style.scss";
import {Outlet} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const MainLayout: React.FC = () => {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: ["Pretendard", "-apple-system", "Roboto", "sans-serif"].join(
        ","
      ),
      fontSize: 15,
      fontWeightRegular: 300,
      fontWeightBold: 500,
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Outlet/>
    </ThemeProvider>
  );
};

export default MainLayout;