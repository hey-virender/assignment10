import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Copyright © {currentYear} Keeper. All rights reserved.
        </p>
        <p className="text-sm md:text-base mt-2">
          Made with ❤️ by{" "}
          <span className="text-purple-400 font-medium">Virender Chauhan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
