import React from "react";

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="font-bold text-lg text-gray-900">
            CS — <span className="font-normal">Ticket System</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 md:justify-end">
            <a className="hover:text-gray-900" href="#">Home</a>
            <a className="hover:text-gray-900" href="#">FAQ</a>
            <a className="hover:text-gray-900" href="#">Changelog</a>
            <a className="hover:text-gray-900" href="#">Blog</a>
            <a className="hover:text-gray-900" href="#">Download</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
            <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
              + New Ticket
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
