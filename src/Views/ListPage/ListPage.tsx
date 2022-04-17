import { useSearchParams } from "react-router-dom";
import ProductsList from "./UI/ProductsList/ProductsList";
import Sidebar from "./UI/Sidebar/Sidebar";

const ListPage = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("name");
  const type = searchParams.get("type");

  return (
    <article className="container p-4 mx-auto flex flex-col flex-1">
      <h1 className="font-headings text-5xl text-center font-semibold text-secondary-200 mb-4">
        Drinks List
      </h1>
      <div className="grid grid-cols-5 flex-1">
        <Sidebar type={type} title={title} />
        <ProductsList type={type} title={title} />
      </div>
    </article>
  );
};

export default ListPage;
