import styles from "../../../styles/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image from "../../../Assests/images/landingPage/electronic-devices.jpg";

const Hero = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const onExploreMore = () => {
    window.scrollTo({ top: 875, behavior: "smooth" });
  };

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
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.normalFlex}`}
        >
          <img
            src={require("../../../Assests/images/landingPage/home-decor.jpg")}
            alt="Electronic Products"
            className="object-cover h-[55dvh] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading}`}>
            Redesign your Home Decorations
          </p>
          <p className={`${styles.carousolSubHeading} `}>
            Find stunning and modern home decor products to make your home more
            sleek and stylish.
          </p>
        </div>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.normalFlex}`}
        >
          <img
            src={require("../../../Assests/images/landingPage/electronic-devices.jpg")}
            alt="Electronic Products"
            className="object-cover h-[55dvh] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading}`}>
            Best Deals on Electronic Products
          </p>
          <p className={`${styles.carousolSubHeading} `}>
            Explore the latest collection of electronic products from top brands
            at the best prices and get them delivered to your door.
          </p>
        </div>
        <div
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full  ${styles.normalFlex}`}
        >
          <img
            src="https://d3c7odttnp7a2d.cloudfront.net/uploads/article/social_image/6-kitchen-products-our-test-team-can-t-live-without/Image_of_kitchen_appliances.png"
            alt="kitchen appliances"
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
          className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.normalFlex}`}
        >
          <img
            src={require("../../../Assests/images/landingPage/clothing.jpg")}
            alt="fashion clothes"
            className="object-cover h-[552px] 800px:h-[90dvh] w-[90%] 800px:w-full -mt-12"
          />
          <p className={`${styles.carousolHeading} text-cyan-200`}>
            Stylish and Colorful Wardrobes
          </p>
          <p className={`${styles.carousolSubHeading} text-green-200`}>
            Explore the latest collection of stylish and colorful wardrobes from
            reknowned brands and designers.
          </p>
        </div>
      </Carousel>

      {!isMobile && (
        <>
          <div
            className={`${styles.normalFlex} justify-center -translate-y-[7.5%] absolute bottom-8 `}
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
