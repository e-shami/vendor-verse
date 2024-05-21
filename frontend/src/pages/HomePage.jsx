import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  let open = {
    display: "block",
    marginBottom: 30,
    borderRadius: 10,
  };
  let close = {
    display: "none",
  };

  const [showMessageBox, setShowMessageBox] = useState(false);

  const openChatWindow = () => {
    setShowMessageBox(!showMessageBox);
  };

  return (
    <div>
      <Header activeHeading={1} />
      <div>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <div className="fixed right-20 bottom-20 flex flex-col items-end">
          <iframe
            width="350"
            height={430}
            title="Chat Box"
            style={showMessageBox ? open : close}
            allow="microphone"
            src="https://console.dialogflow.com/api-client/demo/embedded/27c114b5-0491-49b3-ab22-2cb23184268f"
          ></iframe>
          <button
            className="bg-[#255e85] rounded-[50%] shadow-md shadow-black h-14 w-14 mr-4 p-3"
            onClick={openChatWindow}
          >
            <ion-icon
              name="chatbubble-ellipses-outline"
              size="large"
              style={{ color: "white" }}
            ></ion-icon>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
