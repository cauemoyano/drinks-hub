import { useSearchParams } from "react-router-dom";
import ProductsList from "./UI/ProductsList/ProductsList";
import Sidebar from "./UI/Sidebar/Sidebar";

const ListPage = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("name");
  const type = searchParams.get("type");

  return (
    <article className="max-w-full lg:container pt-4 xs:px-4 mx-auto flex flex-col flex-1 page">
      <h1 className="font-headings text-4xl sm:text-5xl text-center font-semibold text-secondary-200 mb-2 xs:mb-4">
        Drinks List
      </h1>
      <div className="sm:grid grid-cols-5 flex-1">
        <aside className="col-span-1 hidden sm:block p-4 relative z-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:h-full before:w-[50vw] before:bg-primary-100 before:z-[-1]">
          <Sidebar type={type} title={title} />
        </aside>

        <ProductsList type={type} title={title} />
      </div>
    </article>
  );
};

export default ListPage;
