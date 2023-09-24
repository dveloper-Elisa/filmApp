const TrustPilots = (pros) => {
  return (
    <>
      <div className=" m-6 bg-sky-50">
        <div className="m-8">
          <p className="text-blak my-4 flex items-center gap-2">
            <i className="fa fa-star text-[30px]"></i>
            <span className="font-bold">{pros.Title}</span>
          </p>
          <div className="w-fit">{pros.Content}</div>
          <div className="text-blue-700 flex items-center text-bold my-5">
            <p className="cursor-pointer flex gap-1">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </p>
            <p className="ml-[60%] font-bold "> {">"} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustPilots;
