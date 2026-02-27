// import { useNavigate } from "react-router-dom";

// export default function FeedbackButton() {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed top-[70px] right-[25px] z-50">
//       <button
//         onClick={() => navigate("/feedback")}
//         className="
//           px-6 py-3
//           text-sm font-semibold
//           text-blue-700
//           bg-white/70
//           backdrop-blur-md
//           border border-gray-200
//           rounded-md
//           shadow-lg
//           hover:bg-white
//           transition duration-300
//         "
//       >
//         Give Feedback
//       </button>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function FeedbackButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <button
        onClick={() => navigate("/feedback")}
        className="
          bg-blue-700
          text-white
          px-6 py-2
          text-sm font-semibold
          rounded-t-lg
          shadow-lg
          hover:bg-blue-800
          transition duration-300
          rotate-[-90deg]
          origin-bottom-right
        "
      >
        Give Feedback
      </button>
    </div>
  );
}