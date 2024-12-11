import React from "react";
import { CiSearch } from "react-icons/ci";
import ActionBtn from "../ActionBtn";
import { useAppContext } from "../../context/appcontext";
import { useState } from "react";

const SearchBox = () => {
  const {
    searchTerm,
    setSearchTerm,
    setLocationTerm,
    setCategoryTerm,
    setPriceTerm,
  } = useAppContext();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(search);
    setLocationTerm(location);
    setCategoryTerm(category);
    setPriceTerm(price);
  };
  const resetFilters = ()=>{
    setSearchTerm("");
    setCategoryTerm("");
    setPriceTerm("");
    setLocationTerm("");
    //update the input fields
    setSearch("");
    setLocation("");
    setCategory("")
    setPriceTerm("");

  }
  return (
    <div className="bg-dark w-100">
      <div className="container py-5">
        <form onSubmit={handleSearch}>
          <div className=" form-container mx-auto position-relative">
            <CiSearch
              className="position-absolute fs-3"
              style={{ top: "15px", left: "5px" }}
            />
            <input
              type="text"
              className="form-control shadow-none ps-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ height: "56px" }}
              placeholder="Search Events"
            />
          </div>
          <div className="text-white my-3 my-lg-4 w-75 mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 form-test">
            <select
              className="form-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Location</option>
              <option value="online">Online</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
            </select>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="tech">Technology</option>
              <option value="sports">Sport</option>
              <option value="education">Education</option>
              <option value="party">Party</option>
              <option value="concert">Concert</option>
              <option value="comedy">Comedy</option>
              <option value="seminar">Seminar</option>
            </select>

            <select
              className="form-select"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Price</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>

            <ActionBtn
              content="Apply"
              width={"128px"}
              type="submit"
              className="herobtn"
            />
            <button
              type="button"
              onClick={resetFilters}
              className="bg-transparent main-color border-0 reset-btn"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
