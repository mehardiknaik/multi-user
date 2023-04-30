import { useEffect } from "react";

const useRemoveLoader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ele = document.getElementById("progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {
          // ele.remove();
          ele.outerHTML = "";
          console.log("loader remov");
        }, 1300);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
};

export default useRemoveLoader;
