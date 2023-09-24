import { Link } from "react-router-dom";
const Btn = (pros) => {
  return (
    <button className="w-fit tracking-[3px] rounded my-4 text-white p-3 cursor-pointer bg-red-600">
      <Link to={pros.link}>
        {pros.play}
        {pros.name}
      </Link>
    </button>
  );
};

export default Btn;
