import "./App.css";
import Conversation from "./components/Conversation/Conversation";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Conversation />
      </StyledEngineProvider>
    </>
  );
}

export default App;
