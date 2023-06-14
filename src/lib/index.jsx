import PropTypes from "prop-types";

import { AiOutlineClose } from "react-icons/ai";

MyModal.propTypes = {
  modalProps: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    actionA: PropTypes.object,
    actionB: PropTypes.object,
    isOpen: PropTypes.func,
  }),
};

/**
 * @description Modal component
 */
function MyModal({ modalProps }) {
  const { title, message, actionA, actionB, isOpen } = modalProps;

  const onClose = () => {
    isOpen(false);
  };

  return (
    <>
      <div className="z-50 transition duration-300 bg-zinc-600 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
        <div className="bg-zinc-100 w-11/12 md:max-w-md mx-auto rounded-md shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-start p-4 gap-4">
            <h2 className="text-xl font-bold">{title}</h2>

            <div className="flex justify-center items-center cursor-pointer">
              <AiOutlineClose className="text-xl font-bold" onClick={onClose} />
            </div>
          </div>

          <div className="py-4 text-left px-4">{message}</div>

          <div className="flex gap-2 items-center w-100 p-4">
            <button
              className="bg-red-700 rounded-md px-3 py-1 text-white font-semibold"
              onClick={actionA?.action}
            >
              {actionA?.title}
            </button>

            <button
              className="bg-red-700 rounded-md px-3 py-1 text-white font-semibold"
              onClick={actionB?.action}
            >
              {actionB?.title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyModal;
