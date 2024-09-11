import "../App.css"
import cricketbg from "../images/cricketbg.jpg"; // This file will contain the provided CSS

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cricketbg})` }}
    >
      <div className="title">
        <h1 className="text-8xl">Unleash the Power of Cricket with XYZ Organization.</h1>
      <button className="bg-blue-900 h-[3rem] w-[8rem] mt-4 rounded-xl">Get Started</button>

      </div>
    </div>
  );
};

export default Home;
