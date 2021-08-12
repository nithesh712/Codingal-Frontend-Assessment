import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import Modal from './Modal';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  const MinSecs = { minutes: 10, seconds: 0 };
  const [endCountDown, setEndCountDown] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative shadow-md">
      {width > 768 ? (
        <div className="flex">
          <Link to="/" className="flex ml-8">
            <img
              className="h-10 w-10 hidden md:block"
              src="https://media-exp1.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU"
              alt="Logo"
            />
          </Link>
          <Link
            to="#"
            className="block py-1 px-2 mt-1 ml-8 text-black-600 hover:bg-gray-100"
          >
            Trail Class [Grade 1-3]
          </Link>
        </div>
      ) : (
        <Link to="/">
          <img
            className="h-12 w-76"
            src="data:image/png;base64,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"
            alt="Logo"
          />
        </Link>
      )}

      <button
        onClick={toggleLink}
        className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          showLink ? '' : 'hidden'
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}
      >
        <Link
          to="/class"
          className="block py-4 px-4 pr-4 text-black-600 hover:bg-gray-100 md:hidden"
        >
          Trail Class [Grade 1-3]
        </Link>
        <Link
          to="/passengers"
          className="block py-1 mt-1 px-4 text-black-600 hover:bg-gray-100"
        >
          Passengers
        </Link>
        <Link
          to="#"
          className="block py-1 mt-1 px-4 text-black-600 hover:bg-gray-100"
        >
          <Counter MinSecs={MinSecs} endCountDown={endCountDown} />
        </Link>
        <button
          className="px-5 mt-1 py-2 text-sm font-medium md:text-lg bg-red-500 text-white rounded hover:bg-red-400"
          onClick={() => setShowModal(true)}
        >
          End class
        </button>
      </nav>
      {showModal && (
        <Modal setShowModal={setShowModal} setEndCountDown={setEndCountDown} />
      )}
    </header>
  );
};

export default Navbar;
