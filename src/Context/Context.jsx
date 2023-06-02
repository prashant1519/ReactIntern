import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

export const MainContext = createContext();

export function ContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState([]);
  const[singleData,setSingleData]= useState({})
  

  // Fetching data
  useEffect(() => {
    let url = "https://api.tvmaze.com/search/shows?q=all";
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
        
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MainContext.Provider value={{ data,singleData,setSingleData }}>
      {children}
    </MainContext.Provider>
  );
}

// export default MainContextProvider

