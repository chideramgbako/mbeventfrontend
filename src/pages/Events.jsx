import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/Events Components/SearchBox";
import AllEvents from "../components/Events Components/AllEvents";
import Pagination from "../components/Pagination";
import { useAppContext } from "../context/appcontext";
const Events = () => {
  const {events, isLoading, totalPages, page, setPage}= useAppContext();
  return (
    <>
      <Layout>
        <SearchBox />
        <AllEvents />
       {!isLoading && totalPages > 1 && <Pagination currentPage={page} setCurrentPage={setPage} numOfPages={totalPages} />}
      </Layout>
    </>
  );
};

export default Events;
