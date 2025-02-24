/* eslint-disable react/prop-types */
const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      id={id}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
    </button>
  );
};

export default Button;
