import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";

const Hero = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const onExploreMore = () => {
    window.scrollTo({ top: 875, behavior: "smooth" });
  };

  const openChatWindow = () => {};
  return (
    <div className="flex items-center flex-col">
      <Carousel
        interval={5000}
        transitionTime={1000}
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className="-translate-y-[7.5%] 800px:-translate-y-0"
      >
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.noramlFlex}`}
        >
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Hero-MicrosoftComplete-Devices:VP2-859x540"
            className="object-cover h-[55dvh] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading}`}>
            Best Deals on Electronic Products
          </p>
          <p className={`${styles.carousolSubHeading}`}>
            Explore the latest collection of electronic products from top brands
            at the best prices and get them delivered to your door.
          </p>
        </div>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full  ${styles.noramlFlex}`}
        >
          <img
            src="https://d3c7odttnp7a2d.cloudfront.net/uploads/article/social_image/6-kitchen-products-our-test-team-can-t-live-without/Image_of_kitchen_appliances.png"
            className="object-cover h-[55dvh] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading}`}>
            Premium Quality Kitchen Appliances
          </p>
          <p className={`${styles.carousolSubHeading}`}>
            Discover the latest and greatest kitchen appliances for the a
            standard lifestyle living at the most affordable prices.
          </p>
        </div>

        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.noramlFlex}`}
        >
          <img
            src="https://thumbs.dreamstime.com/b/fashion-clothes-concept-female-blouses-t-shirts-dresses-hanger-white-background-blog-website-social-media-158685437.jpg"
            className="object-cover h-[552px] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading}`}>Third slide description</p>
        </div>
      </Carousel>

      {!isMobile && (
        <>
          <div className="absolute right-32  bottom-28">
            <buttom
              className="bg-[#255e85] p-6 rounded-[50%] shadow-md shadow-black"
              onClick={openChatWindow}
            >
              <span className="font-[Poppins] font-[500] text-[22px] text-[#fff]">
                Chat?
              </span>
            </buttom>
          </div>

          <div
            className={`${styles.noramlFlex} justify-center -translate-y-[7.5%] absolute bottom-8 `}
          >
            <button
              onClick={onExploreMore}
              style={{
                backgroundColor: "#ff7900",
                padding: "10px 25px",
                borderRadius: "10px",
                backgroundBlendMode: "multiply",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <span className="font-[Poppins] font-[500] text-[22px] text-[#000] normal-case hover:underline hoevr:cursor-pointer hover:underline-offset-8">
                Explore Now!
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
