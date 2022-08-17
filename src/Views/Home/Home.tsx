import SearchWrapper from "./UI/SearchWrapper/SearchWrapper";

const Home = () => {
  return (
    <div className="page w-screen flex relative z-0 flex-1 after:invisible md:after:visible after:content-[''] after:z-20 after:absolute after:h-1/4 lg:after:h-full  after:w-full lg:after:w-2/6  after:bottom-0 lg:after:top-0 after:left-0 lg:after:left-2/3 home-bg">
      <div className="container mx-auto relative z-20 my-auto md:pb-32 lg:pb-0 px-4 flex justify-center">
        <section className="w-full md:w-2/3 xl:w-1/2 pb-24 sm:pb-0 md:pb-20 xl:pb-18">
          <div className="flex flex-col justify-center w-full md:w-[70%] xl:w-[80%]">
            <h1
              className="font-headings leading-none sm:leading-normal text-3xl sm:text-4xl xl:text-6xl font-semibold text-secondary-200 mb-2 xl:mb-4"
              id="home-presentation"
            >
              Find everything about your favourite drink
            </h1>
            <h2 className="leading-tight sm:leading-normal sm:text-lg text-neutral-dark mb-3 xl:mb-6">
              You can search a drink or explore our collection and get useful
              information as how to prepare your favourite drink.
            </h2>
            <SearchWrapper />
          </div>
        </section>
      </div>
      <img
        src="./images/orange-bg.svg"
        alt=""
        className="absolute right-0 lg:right-auto lg:left-0 top-0 lg:top-auto lg:bottom-0 lg:rotate-180 -translate-y-1/2 lg:translate-y-1/2 z-10 h-1/3 sm:h-1/2 lg:h-4/5 w-auto"
      ></img>
    </div>
  );
};

export default Home;
