
import player2 from "../images/player2.jpg";
import player4 from "../images/player4.jpg";
import player3 from "../images/player3.jpg";
import player5 from "../images/plater5.jpg";


const Tournaments = () => {
  const boxes = [
    {
      id: 1,
      img: player2,
      heading: "Rising from Defeat: Lessons Learned After a Cricket Setback.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
    {
      id: 2,
      img: player3,
      heading: "Cricket’s Hidden Gems: Rising Stars Redefining the Game.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
    {
      id: 3,
      img: player4,
      heading: "Blocking the Day: All the Struggle We Had, Day to Day.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
    {
      id: 4,
      img: player5,
      heading: "Breaking Bound: Kriket Shatters Records in Latest Victory!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
    {
      id: 5,
      img: player2,
      heading: "From Wickets to Wonders: Top 10 Plays of the Cricket Season!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
    {
      id: 6,
      img: player5,
      heading: "Breaking Bound: Kriket Shatters Records in Latest Victory!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
    },
  ];

  return (
    <div
    
    id="tournaments" className="py-8   px-4 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Gems</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={box.img}
              alt={box.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{box.heading}</h2>
              <p className="text-gray-700">{box.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
