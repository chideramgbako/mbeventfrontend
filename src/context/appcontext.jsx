import { createContext, useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const url = "https://mbeventbackendserver.onrender.com/api/v1/events";
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [priceTerm, setPriceTerm] = useState("");

  const getEvents = async () => {
    setIsLoading(true);
    try {
      const result = await axios(
        `${url}?page=${page}&searchTerm=${searchTerm}&location=${locationTerm}&price=${priceTerm}&category=${categoryTerm}`
      );
      // console.log(result);
      setIsLoading(false);
      setEvents(result.data.events);
      setPage(result.data.currentPage);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, [page, searchTerm, locationTerm, categoryTerm, priceTerm]);
  return (
    <AppContext.Provider
      value={{
        events,
        isLoading,
        page,
        setPage,
        totalPages,
        searchTerm,
        setSearchTerm,
        setLocationTerm,
        setCategoryTerm,
        setPriceTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
