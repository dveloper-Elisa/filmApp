const Divs = (pros) => {
  return (
    <>
      <div className="bg-blue-500 p-[20px] ">
        <div className="bg-blue-900  rounded p-[15px]">
          <div className="text-white flex text-[30px] ">{pros.title}</div>
          <p className="text-left text-white">{pros.content}</p>
        </div>
      </div>
    </>
  );
};

export default Divs;
