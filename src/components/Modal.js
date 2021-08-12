import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal = ({ setShowModal, setEndCountDown }) => {
  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 500,
      easing: 'ease-in',
      once: true,
      mirror: false,
    });
    AOS.refresh();
  });
  const [primaryReason, setPrimaryReason] = useState('completed');
  const [interruptReason, setInterruptReason] = useState('4');

  const handleInterruptReason = (e) => {
    setInterruptReason(e.target.value);
  };

  const handleEndClass = () => {
    setShowModal(false);
    setEndCountDown(true);
  };

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            data-aos="zoom-in"
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none md:p-16 p-8"
          >
            <div className="flex items-start py-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="md:text-4xl text-2xl pt-3 font-bold text-gray-600">
                Select a reason to end class
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold absolute top-5 right-10"
                onClick={() => setShowModal(false)}
              >
                <span className="text-gray-600 opacity-50  h-6 w-6 text-2xl block">
                  {/* <XIcon className="h-10 w-10" /> */}
                </span>
              </button>
            </div>
            {/*body*/}
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="relative p-6 flex flex-col space-y-4 text-gray-600 font-bold"
            >
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="completed"
                  onChange={() => setPrimaryReason('completed')}
                  checked={primaryReason === 'completed'}
                  className=" h-6 w-6 text-red-500 rounded-full"
                />
                <span className="ml-3 text-lg">Class Completed</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="interrupted"
                  onChange={() => setPrimaryReason('interrupted')}
                  checked={primaryReason === 'interrupted'}
                  className=" h-6 w-6 text-red-500 rounded-full"
                />
                <span className="ml-3 text-lg">Class Interrupted/aborted</span>
              </label>
              {primaryReason === 'interrupted' && (
                <div className="flex flex-col pl-7 space-y-4 text-base interrupted-option">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="1"
                      onChange={handleInterruptReason}
                      checked={interruptReason === '1'}
                      className=" h-6 w-6 text-red-500 rounded-full"
                    />
                    <span className="ml-3 ">
                      Student didn't show up for the class.
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="2"
                      onChange={handleInterruptReason}
                      checked={interruptReason === '2'}
                      className=" h-6 w-6 text-red-500 rounded-full"
                    />
                    <span className="ml-3 ">
                      Student didn't show any interest.
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="3"
                      onChange={handleInterruptReason}
                      checked={interruptReason === '3'}
                      className=" h-6 w-6 text-red-500 rounded-full"
                    />
                    <span className="ml-3 ">Student got disconnected.</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="4"
                      onChange={handleInterruptReason}
                      checked={interruptReason === '4'}
                      className=" h-6 w-6 text-red-500 rounded-full"
                    />
                    <span className="ml-3 ">I got disconnected</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="5"
                      onChange={handleInterruptReason}
                      checked={interruptReason === '5'}
                      className=" h-6 w-6 text-red-500 rounded-full"
                    />
                    <span className="ml-3 ">Other reason</span>
                  </label>
                  {interruptReason === '5' && (
                    <label className="inline-flex items-center interrupted-option">
                      <textarea
                        class="w-full p-3"
                        rows="2"
                        placeholder="Type here"
                      ></textarea>
                    </label>
                  )}
                </div>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-start p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className=" px-10 py-2 text-sm font-medium md:text-lg bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mr-1 mb-1 "
                type="button"
                onClick={handleEndClass}
              >
                End Class
              </button>
              <button
                className=" text-gray-500 px-5 py-2 text-sm font-medium md:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
