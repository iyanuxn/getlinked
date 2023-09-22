const Modal = ({ isOpen, onClose, image, title, message, subText }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-darkAlt bg-opacity-95 w-full h-full flex justify-center items-center fixed top-0 left-0 z-50">
      <div className="border border-primary rounded-md w-3/4 h-max md:w-[40vw] flex justify-center items-center flex-col md:px-10 md:py-12 px-3 py-8">
        <img src={image} alt="modal" className="md:w-3/4 md:h-3/4" />
        <div className="flex flex-col justify-center items-center text-center">
          <span className="text-sm md:text-2xl font-bold">{title}</span>
          <span className="text-sm md:text-2xl font-bold md:w-full w-3/4">
            {message}
          </span>
          <span className="text-xs md:text-[0.8em] flex mt-3 md:w-72 w-56">
            {subText}
          </span>
          <button
            className="w-full text-xs md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 md:py-4 rounded-md md:mt-10 mt-8"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
