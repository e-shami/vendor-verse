import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";
import FilterComponent from "../components/Products/Filter";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedData);
  }, [allProducts]);

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
  }, [filters, allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={2} />
          <br />
          <div className={`${styles.section}`}>
            <FilterComponent onFilterChange={setFilters} />
            <br />
            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 && (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No Products Found
              </h1>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default BestSellingPage;
