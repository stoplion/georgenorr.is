import type { NextPage } from "next";
import { Resume } from "../components/Resume";

const Home: NextPage = () => {
  return <div className="pattern-bg"><Resume /></div>;
};

export default Home;
