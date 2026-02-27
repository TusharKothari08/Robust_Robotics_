import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Lastfooter = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold leading-none">
            ROBUST ROBOTICS
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-none">
            © 2025 JEKOBACHAN LLP. All Rights Reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex items-center justify-center gap-8 text-sm">
          <a href="#" className="text-gray-700 hover:underline">
            Privacy
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Cookies
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/company/robust-robotics-jekobachanllp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaLinkedinIn className="text-xl text-black" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaXTwitter className="text-xl text-black" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Lastfooter;
