import React from "react";

const HowMakeContainer = ({
  instructions,
}: {
  instructions: string | undefined;
}) => {
  return (
    <div className="col-span-1 relative p-4 z-20 after:content[''] after:absolute after:top-0 after:right-0 after:w-[200rem] after:h-[100vh] after:-z-10 after:bg-secondary-100">
      <h2 className="text-4xl font-semibold text-gray-700 mb-2">
        How to make it
      </h2>
      <p className="text-gray-800 text-lg">{instructions}</p>
    </div>
  );
};

export default HowMakeContainer;
