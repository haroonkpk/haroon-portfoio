import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const gradientPercent = useTransform(scrollYProgress, [0, 1], [20, 120]);
  const background = useMotionTemplate`linear-gradient(#0F2B9C, #673D7D ${gradientPercent}%, #A74A67, #EDFC54 )`;

  const yMountain3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yMountain2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yMountain1 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Clouds Animation
  const opacityClouds = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const xCloudLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const xCloudRight = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Stars Animation
  const yStars = useTransform(scrollYProgress, [0, 1], ["-550px", "0px"]);
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 210]);

  const yCopy = useTransform(scrollYProgress, [0, 1], ["-15%", "40%"]);

  const opacityCopy = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const opacityBtn = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div id="home" ref={ref} className="relative w-full h-[300vh] bg-[#282a57]">
      {/* Sticky Container */}
      <motion.div
        style={{ background }}
        className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-between"
      >
        {/* Stars */}
        <motion.img
          style={{ top: yStars }}
          className="absolute left-0 w-full z-0"
          src="/parallax/stars.svg"
          alt="stars"
        />

        {/* Sun */}
        <motion.img
          style={{ y: ySun }}
          className="absolute -bottom-[5%] left-[30%] w-[40%]"
          src="/parallax/sun.svg"
          alt="sun"
        />

        {/* Mountain 3 */}
        <motion.img
          style={{ y: yMountain3 }}
          className="absolute -bottom-25 w-full z-[3]"
          src="/parallax/mountain-3.svg"
          alt="mountain 3"
        />

        {/* Mountain 2 */}
        <motion.img
          style={{ y: yMountain2 }}
          className="absolute -bottom-[75px] w-full z-[2]"
          src="/parallax/mountain-2.svg"
          alt="mountain 2"
        />

        {/* Mountain 1 */}
        <motion.img
          style={{ y: yMountain1 }}
          className="absolute -bottom-[45px] w-full z-[1]"
          src="/parallax/mountain-1.svg"
          alt="mountain 1"
        />

        {/* Clouds */}
        <motion.img
          style={{ opacity: opacityClouds }}
          className="absolute -bottom-25 w-full"
          src="/parallax/cloud-bottom.svg"
          alt="clouds bottom"
        />
        <motion.img
          style={{ x: xCloudLeft, opacity: opacityClouds }}
          className="absolute top-0 left-0 w-[20%]"
          src="/parallax/clouds-left.svg"
          alt="clouds left"
        />
        <motion.img
          style={{ x: xCloudRight, opacity: opacityClouds }}
          className="absolute top-0 right-0 w-[20%]"
          src="/parallax/clouds-right.svg"
          alt="clouds right"
        />

        {/* Text Container */}
        <motion.div
          style={{ y: yCopy, opacity: opacityCopy }}
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-[#e4e4e4] px-4 text-center"
        >
          <motion.div className="flex flex-col items-center w-full max-w-5xl">
            <h1
              style={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
              className="text-3xl sm:text-6xl mt-30 sm:mt-0 md:text-[5rem] font-bold font-montserrat"
            >
              Muhammad <span className="text-[#C44E52]">Haroon </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 mt-2 md:mt-0">
              Full stack web Developer & UI/UX Enthusiast
            </p>

            {/* Tags/Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                MongoDB
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                Express
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                React.js
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                Node.js
              </span>
            </div>

            {/* Buttons */}
            <motion.div
              style={{ opacity: opacityBtn }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto"
            >
              <a
                href="http://www.github.com/haroonkpk"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-[#C44E52] rounded-4xl font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
              <a
                href="/Muhammad_Haroon_Resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z"
                    clipRule="evenodd"
                  />
                </svg>
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
