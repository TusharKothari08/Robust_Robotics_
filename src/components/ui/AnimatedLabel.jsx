// import { motion } from "framer-motion";

// export default function AnimatedLabel({ children, className = "" }) {
//   const text = children;

//   return (
//     <motion.p
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.6 }}
//       className={`flex ${className}`}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           variants={{
//             hidden: { opacity: 0, y: 10 },
//             show: {
//               opacity: 1,
//               y: 0,
//               transition: {
//                 delay: index * 0.06,
//                 duration: 0.4,
//                 ease: "easeOut",
//               },
//             },
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// }

import { motion } from "framer-motion";

export default function AnimatedLabel({ children, className = "" }) {

  const text = children;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letter = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.05 }
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      
      <motion.p
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>

      {/* Cursor */}
      <motion.span
        className="ml-1 w-[2px] h-[1em] bg-black"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
      />

    </div>
  );
}