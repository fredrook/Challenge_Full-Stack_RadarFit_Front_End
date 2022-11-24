import AuthProvider from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AppDiv } from "./Styles/AppCSS";
import "./Styles/AppCSS.ts";

function App() {
  return (
    <>
      <AuthProvider>
        <AppDiv>
          <Dashboard />
        </AppDiv>
      </AuthProvider>
    </>
  );
}

export default App;
