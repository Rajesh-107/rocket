import React from 'react';
import Search from './Search';

const Navbar = () => {
    return (
        <div>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <button>
            
            <img className="h-10" src={`https://cdn.imgbin.com/2/3/4/imgbin-rocket-logo-rocket-ztzbSgUNy4mWmgtBNtHZJ4Tr0.jpg`} alt="" />
            
          </button>
          
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <Search></Search>
            <img className="inline h-4 cursor-pointer" src='https://cdn-icons-png.flaticon.com/512/158/158740.png' alt="Search" />
          </div>
          <button
            
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Roket launches
          </button>
        </div>
      </nav>
    </div>
    );
};

export default Navbar;