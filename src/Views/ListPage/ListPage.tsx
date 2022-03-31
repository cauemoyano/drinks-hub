import React from "react";

const ListPage = () => {
  return (
    <article className="container p-4 mx-auto">
      <h1 className="font-headings text-5xl font-semibold text-secondary-200 mb-4">
        Drinks List
      </h1>
      <div className="grid grid-cols-5">
        <aside className="col-span-1 p-4 bg-black">
          <h2 className="text-2xl text-white">Search</h2>
        </aside>
        <section className="col-span-4">content</section>
      </div>
    </article>
  );
};

export default ListPage;
