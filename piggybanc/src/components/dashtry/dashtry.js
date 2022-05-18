import control from "../../assets/control.png"
import piggybanc from "../../assets/piggylogo.png"
import Content from "./content";

import { useState } from "react";
const DashTry = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Transaction", src: "transaction" },
    { title: "Reports ", src: "report" },
    { title: "Profile", src: "profile" },

  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#0C1228] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}

          className={`absolute cursor-pointer -right-3 top-9 w-7 border-bg-[#0C1228]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <img
            src={piggybanc}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-bold text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Piggybanc
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-11" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menus.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4 items-center">
        <div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
         <div class="flex items-center mb-3">
            <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Upgrade Now </span>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                  <span class="sr-only">Close</span>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         </div>
         <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
         </p>
         <a class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#"></a>
      </div>
          </div>
      </div> 
      <Content/>       
    </div>
  );
};
export default DashTry;
