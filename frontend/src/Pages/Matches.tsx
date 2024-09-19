import "../App.css";
import Dropdown from "../components/Dropdown";

const Matches: React.FC = () => {
  const option1 = ["HTML", "CSS"];

  return (
    <div className="text-white">
      <div className="text-md font-bold gap-2 flex text-green-900">
        <button className="hover:bg-white bg-gray-900 p-4">Live & Upcoming</button>
        <button className="hover:bg-white bg-gray-900 p-4">Completed</button>
      </div>
      <Dropdown options={option1} />
    </div>
  );
};

export default Matches;
