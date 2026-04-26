import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../Header/Header";

export const PreLoader = ({ children }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;

    const interval = setInterval(() => {
      n += Math.floor(Math.random() * 6) + 3;
      console.log(n);
      if (n >= 100) {
        n = 100;
        clearInterval(interval);

        setTimeout(() => {
          setDone(true);
        }, 800);
      }

      setCount(n);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white" id="preLoader">
      <AnimatePresence>
        {!done && (
          <motion.div
            className="flex items-center justify-center bg-black h-screen flex-col"
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-7xl tracking-wide text-white font-Instrument">
              <h1>Priyanshu.</h1>
            </motion.div>

            {/* Wipe Animation */}
            {count === 100 && (
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.5, 1],
                  ease: [0.83, 0, 0.17, 1],
                }}
              />
            )}
            {/* <div className="bg-white h-1 mt-5 min-w-xs  text-center overflow-hidden"></div> */}
            <hr className="w-57.5 mt-4 text-bar text-[0.65rem]" />
            <motion.div
              className="absolute bottom-10 right-10 text-dim opacity-35"
              key={count}
              transition={{ duration: 0.4 }}
            >
              {String(count).padStart(3, "0")}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {<Header />}
          {children}
        </motion.div>
      )}
    </div>
  );
};
