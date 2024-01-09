import { ToastContainer } from "react-toastify";
import notifyIsOnline from "./hooks/useOnlineStatus";
import AppRoutes from "./routes";

function App() {
   notifyIsOnline();
   
   return (
      <>
         <ToastContainer />
         <AppRoutes />
      </>
   );
}

export default App;
