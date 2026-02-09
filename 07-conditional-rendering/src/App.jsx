import "./App.css";
import LoginForm from "./components/Login/Login";
import RenderList3 from "./components/RenderList3/RenderList3";

function App() {
  
  const isLoggedIn=false;

  switch(isLoggedIn)
  {
    case true:
      return <RenderList3/>
      case false:
        return <LoginForm/>
  }

  
 
}
export default App;
