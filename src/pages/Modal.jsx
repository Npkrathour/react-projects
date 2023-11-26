import React from "react";
import TickImg from "../assets/tick.png";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <button onClick={() => setShow(true)} className="bg-red-500 rounded-lg text-lg font-bold px-5 py-3 text-white">
          View Modal
        </button>
      </div>

      <div className={`${show ? "block" : "hidden"} bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 left-0 right-0`}>
        <div className="absolute top-1/2 left-1/2 bg-white p-10 -translate-y-1/2 -translate-x-1/2 w-full max-w-[600px] rounded-2xl">
          <UilTimes
            onClick={() => setShow(false)}
            size={45}
            className="absolute right-5 top-5 cursor-pointer hover:bg-slate-200 rounded-lg p-1 transition ease-in delay-150"
          />
          <div className="flex justify-center mb-5">
            <img src={TickImg} alt="" className="w-[100px]" />
          </div>
          <h1 className="text-center text-3xl mb-3 font-bold">Welcome user</h1>
          <p className="text-lg font-semibold text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repudiandae voluptates similique doloremque
            iste autem nobis sed consequuntur.
          </p>
          <div className="text-center mt-5">
            <button
              onClick={() => setShow(false)}
              className="bg-green-500 px-12 py-3 rounded-lg font-bold text-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
