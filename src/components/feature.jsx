const Feature = (pros) => {
  return (
    <>
      <div className=" m-6 border">
        <div className="">
          <div className="m-8 md:w-fit ">
            <div className="flex flex-col gap-6 ">
              <p className="text-blue-700 my-4 flex gap-2">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
              <div className="w-fit">{pros.Content}</div>
              <div className="text-blue-700 text-bold my-1">
                <p className="cursor-pointer">Read the full story</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 w-full border">
            <div className="flex items-center justify-around gap-5">
              <img
                src={pros.imageName}
                alt="image not found"
                className="w-[5vw] h-[5vw] my-2 rounded-[50%] "
              />

              <p>
                <h1 className="font-bold">{pros.Title}</h1>
                <h4>{pros.Name}</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
