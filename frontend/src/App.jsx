// @ts-nocheck
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Main from "./components/main/main";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />

          <Header1 />
          <Header2 />
          <Header3 />

          <Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
          >
            <Hero/>
            <Main />
          </Box>

          {/* <Footer /> */}

          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
