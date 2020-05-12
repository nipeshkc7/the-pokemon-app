import React from "react";
import "../style/App.css";
import MainBox from "../containers/Mainbox";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Varela Round"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainBox class="mainContent"></MainBox>
      </div>
    </ThemeProvider>
  );
}

export default App;
