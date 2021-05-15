import Routes from "./routes";
import GlobalStyles from "./assets/GlobalStyles";

//import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
