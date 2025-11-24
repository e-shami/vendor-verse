/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import FilterComponent from "../components/Products/Filter";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();
  const { state } = location;
  const { searchResult, message, status } = state || {};
  console.log(searchResult);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  console.log("categoryData: ", categoryData);
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let filteredProducts = allProducts;
    if (filters.category) {
      filteredProducts = filteredProducts.filter((i) => {
        console.log(i.category, filters.category);
        return i.category === filters.category;
      });
    }
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter((i) => {
        return (
          console.log(i.discountPrice, filters.priceRange),
          i.discountPrice >= filters.priceRange[0] &&
            i.discountPrice <= filters.priceRange[1]
        );
      });
    }
    if (filters.vendor) {
      filteredProducts = filteredProducts.filter((i) => {
        return i.shop.name.toLowerCase().includes(filters.vendor.toLowerCase());
      });
    }
    if (filters.availability) {
      filteredProducts = filteredProducts.filter((i) => {
        return i.stock > 0;
      });
    }

    setData(filteredProducts);
    console.log("filteredProducts: ", filteredProducts);
  }, [filters]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      console.log(categoryData);
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      console.log(d);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [categoryData, allProducts]);

  useEffect(() => {
    if (message) {
      if (message === "success") {
        setData([]);
        setData(searchResult);
      }

      if (message === "failed") {
        setData([]);
      }
    }
  }, [data, searchResult]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <div className={`${styles.section}`}>
            <FilterComponent onFilterChange={setFilters} />
            <br />
            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                {status === "failed" ? (
                  <span>{message}</span>
                ) : (
                  <span>No Products Found!</span>
                )}
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
