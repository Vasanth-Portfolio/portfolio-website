
const AppFooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {currentYear}
        <a
          href="https://github.com/vasanthvinv/react-tailwindcss-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          React & Tailwind CSS Portfolio
        </a>
        .
        <a
          href="https://vasanth.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Vasanth
        </a>
      </div>
    </div>
  );
};

export default AppFooterCopyright;