const HowMakeContainer = ({
  instructions,
}: {
  instructions: string | undefined;
}) => {
  return (
    <div className="col-span-1 relative pt-6 xs:px-4 xs:py-6 z-20 after:content[''] after:absolute after:top-0 after:right-[-1rem] sm:after:right-0 after:w-[200rem] after:h-[100vh] after:-z-10 after:bg-primary-100">
      <h2 className="text-3xl xs:text-4xl font-headings font-semibold text-tertiary-200 mb-2">
        How to make it
      </h2>
      <p className="text-gray-700 xs:text-lg">{instructions}</p>
    </div>
  );
};

export default HowMakeContainer;
