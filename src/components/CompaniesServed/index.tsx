const CompaniesServed = () => {
  return (
    <div className="relative bottom-32 sm:bottom-24 ">
      <h2 className="mb-10 sm:mb-5 text-xl text-center sm:text-3xl font-normal dark:text-white text-black">
        Brands trust the expertise of{" "}
        <span className="font-medium text-red-700"> Maya WebTech</span>
      </h2>
      <div className="flex w-4/5 backdrop-blur-lg justify-center mx-auto rounded-lg bg-transparent border-2 border-gray-300/20 shadow-lg py-4">
        <div className="relative z-10 flex flex-wrap gap-8 w-full h-full items-center justify-around px-4">
          <div className="text-white font-bold">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/Fincafe_dnp2zl.png"
              alt=""
              className=" mix-blend-overlay w-32 h-auto"
            />
          </div>
          <div className="text-white font-bold">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/image_ld5cqs.png"
              alt=""
              className=" mix-blend-overlay w-32 h-auto"
            />
          </div>
          <div className="text-white font-bold">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447385/1000059971-removebg-preview_tgsgve.png"
              alt=""
              className=" mix-blend-overlay w-32 h-auto"
            />
          </div>
          <div className="text-white font-bold">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/logo-removebg-preview_jn0b09.png"
              alt=""
              className=" mix-blend-overlay w-32 h-auto"
            />
          </div>
          <div className="text-white font-bold">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/WEBWISH__LOGO_2_PNG-removebg-preview_l6hizl.png"
              alt=""
              className=" mix-blend-overlay w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesServed;
