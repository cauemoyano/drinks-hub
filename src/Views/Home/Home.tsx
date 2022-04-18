import SearchWrapper from "./UI/SearchWrapper/SearchWrapper";

const Home = () => {
  return (
    <div className="page w-screen flex relative flex-1 after:content-[''] after:h-full after:w-2/6 after:absolute after:top-0 after:left-2/3 after:bg-secondary-100">
      <div className="container grid mx-auto grid-cols-2 relative z-20 my-auto px-4">
        <section className="grid grid-cols-5">
          <div className="flex flex-col justify-center col-start-2 col-end-6">
            <h1
              className="font-headings text-5xl font-semibold text-secondary-200 mb-4"
              id="home-presentation"
            >
              Find everything about your favourite drink
            </h1>
            <h2 className="text-xl text-neutral-dark mb-6">
              You can search a drink or explore our collection and get useful
              information as how to prepare your favourite drink.
            </h2>
            <SearchWrapper />
          </div>
        </section>
        <div>
          <img src="./images/home-bg-drinks-hub.svg" alt=""></img>
        </div>
      </div>
      <img
        src="./images/orange-bg.svg"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-4/5 w-auto"
      ></img>
    </div>
  );
};

export default Home;
