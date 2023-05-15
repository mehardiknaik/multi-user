import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import id from "../config/clientID";

const StrapiContext = createContext<any>(null);
export const StrapiProvider = ({ children }: any) => {
  const [strapiData, setStrapiData] = useState(null);
  const [strapiLoading, setStrapiLoading] = useState(true);
  const [strapiError, setStrapiError] = useState("");

  useEffect(() => {
    let timer: any = null;
    const getData = async () => {
      try {
        //@ts-ignore
        if (id[import.meta.env.VITE_APP_NAME]) {
          const { data }: any = await axios.get(
            `${import.meta.env.VITE_APP_STRAPI_URL}/configs/${
              //@ts-ignore
              id[import.meta.env.VITE_APP_NAME]
            }?populate=deep`
          );
          setStrapiData(data.data);
        }
      } catch (e: any) {
        console.log(e);
        setStrapiError(e?.response?.data?.message || e?.message);
      } finally {
        setStrapiLoading(false);
        timer = setTimeout(() => {
          const ele = document.getElementById("progress-indicator");
          if (ele) {
            ele.classList.add("available");
            setTimeout(() => {
              ele.remove();
            }, 1300);
          }
        }, 1000);
      }
    };
    getData();
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrapiContext.Provider value={{ strapiData, strapiLoading, strapiError }}>
      {children}
    </StrapiContext.Provider>
  );
};

export const useStrapi = () => useContext(StrapiContext);
export const useStrapiData = () => {
  const { strapiData } = useContext(StrapiContext);
  return strapiData;
};
