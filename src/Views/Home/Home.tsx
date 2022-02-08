import React from "react";
import SearchWrapper from "./UI/SearchWrapper/SearchWrapper";

const Home = () => {
  return (
    <div className="flex-1 relative flex after:content-[''] after:h-full after:w-2/6 after:absolute after:top-0 after:left-2/3 after:bg-secondary-100">
      <main className="container mx-auto columns-2 relative z-10 my-auto">
        <section>
          <h1 className="font-headings text-7xl text-secondary-200 mb-4">
            Find everything about your favourite drink
          </h1>
          <h2 className="text-xl text-neutral-dark mb-4">
            You can search a drink or explore our collection and get useful
            information as how to prepare your favourite drink.
          </h2>
          <SearchWrapper />
        </section>
        <div className="">
          <img src="./images/home-bg-drinks-hub.svg"></img>
        </div>
      </main>
    </div>
  );
};

export default Home;
