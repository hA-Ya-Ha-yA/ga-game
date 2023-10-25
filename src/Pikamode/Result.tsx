import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Sample from "../Pikamode/Sample";

type Props = {
  bestValue: number;
  iteration: number;
  bestSolComp: Array<Array<number>>;
};

export default function Result(props: Props) {
  const { bestValue, iteration, bestSolComp } = props;
  return (
    <>
      <div className="absolute top-0 z-40">
        <Confetti width={window.innerWidth} height={window.innerHeight} />;
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div
            style={{ width: "50vw", height: "72vh", overflow: "auto" }}
            className="bg-white rounded-md border border-gray-400 border-b-4 border-r-4 mt-32"
          >
            <div className="font-kosugi text-xl flex justify-between items-center h-9">
              <div className="flex-1 text-center pt-10 ml-32 text-4xl">
                スコア
              </div>
              <Link to="/">
                <button className="rounded-full font-kosugi btn text-xl mt-8 mr-8">
                  Homeに移動
                </button>
              </Link>
            </div>

            <div className="font-nosifer text-center py-10 text-9xl text-green-500">
              {bestValue}%
            </div>
            <div className="flex justify-center -mt-8">
              <Sample iteration={iteration} bestSolComp={bestSolComp} />
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center"></div>
      </div>
    </>
  );
}
