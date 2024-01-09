import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useOnlineStatus() {
   const [isOnline, setIsOnline] = useState(true);
   useEffect(() => {
      function handleOnline() {
         setIsOnline(true);
      }
      function handleOffline() {
         setIsOnline(false);
      }

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
       window.removeEventListener("offline", handleOffline);
   }, []);
   if (!isOnline){
      return toast.warning(isOnline? "Online": "Offline");
   }
}

export default  useOnlineStatus