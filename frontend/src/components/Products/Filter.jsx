import React, { useState } from "react";
import { categoriesData } from "../../static/data";

const FilterComponent = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [vendor, setVendor] = useState("");
  const [availability, setAvailability] = useState(false);

  const handleFilterChange = () => {
    onFilterChange({
      category,
      priceRange,
      vendor,
      availability,
    });
  };

  return (
    <div className="flex flex-row w-11/12 justify-evenly items-center align-baseline 800px:mb-10 800px:mt-5">
      <h3 className="text-2xl text-[#000000a4] text-center font-bold">
        Filter Products
      </h3>
      <div className="flex w-1/5 justify-evenly align-center items-center">
        <label className="font-Poppins text-lg font-semibold text-[#000000a4]">
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-transparent border border-gray-300 rounded-md items-center"
        >
          <option value="">Select a category</option>
          {categoriesData.map((cat, index) => (
            <option key={index} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-evenly items-center w-1/4">
        <label className="font-Poppins text-lg font-semibold text-[#000000a4]">
          Price Range:
        </label>
        <input
          step={5}
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, e.target.value])}
        />
        <span>
          $ {priceRange[0]} - {priceRange[1]}
        </span>
      </div>
      <div className="flex justify-evenly items-center w-1/5">
        <label className="font-Poppins text-lg font-semibold text-[#000000a4]">
          Vendor:
        </label>
        <input
          className="p-2 bg-transparent border border-gray-300 rounded-md items-center pl-4 font-Poppins w-3/4 ml-2"
          type="text"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
      </div>
      <div className="flex justify-evenly items-center px-2">
        <label className="font-Poppins text-lg font-semibold text-[#000000a4] ml-4 mr-2">
          Available:
        </label>
        <input
          type="checkbox"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
      </div>
      <button
        onClick={handleFilterChange}
        className="btn rounded-md bg-slate-900 text-white hover:bg-slate-700 py-2 px-4"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
