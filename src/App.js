import React from "react";
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { MyApp} from './MyApp';
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <ThemeProvider withToastContainer>
          <MyApp />
        </ThemeProvider>
    </HashRouter>
  );
}

export default App;