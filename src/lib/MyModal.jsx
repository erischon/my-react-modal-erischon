import React from "react";

import PropTypes from "prop-types";

import { AiOutlineClose } from "react-icons/ai";

MyModal.propTypes = {
  modalProps: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    actionA: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
    }),
    actionB: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
    }),
    isOpen: PropTypes.func,
    ui: PropTypes.shape({
      modalBackgroundContainer: PropTypes.string,
      modalBackgroundContainerOpacity: PropTypes.string,
      modalBackground: PropTypes.string,
      modalColor: PropTypes.string,
      buttonABackground: PropTypes.string,
      buttonAColor: PropTypes.string,
      buttonBBackground: PropTypes.string,
      buttonBColor: PropTypes.string,
    }),
  }),
};

/**
 * @description Modal component
 */
function MyModal({ modalProps }) {
  const defaultModalProps = {
    title: "Modal Title",
    message: "Modal message",
    actionA: {
      title: "Action A Title",
      action: () => {},
    },
    actionB: {
      title: "Action B Title",
      action: () => {},
    },
    isOpen: () => {},
    ui: {
      modalBackgroundContainer: "bg-zinc-700",
      modalBackgroundContainerOpacity: "bg-opacity-90",
      modalBackground: "bg-zinc-100",
      modalColor: "text-black",
      buttonABackground: "bg-red-600",
      buttonAColor: "text-white",
      buttonBBackground: "bg-red-600",
      buttonBColor: "text-white",
    },
  };

  const {
    title = defaultModalProps.title,
    message = defaultModalProps.message,
    actionA = defaultModalProps.actionA,
    actionB = defaultModalProps.actionB,
    isOpen = defaultModalProps.isOpen,
  } = modalProps;

  const {
    modalBackgroundContainer = defaultModalProps.ui.modalBackgroundContainer,
    modalBackgroundContainerOpacity = defaultModalProps.ui
      .modalBackgroundContainerOpacity,
    modalBackground = defaultModalProps.ui.modalBackground,
    modalColor = defaultModalProps.ui.modalColor,
    buttonABackground = defaultModalProps.ui.buttonABackground,
    buttonAColor = defaultModalProps.ui.buttonAColor,
    buttonBBackground = defaultModalProps.ui.buttonBBackground,
    buttonBColor = defaultModalProps.ui.buttonBColor,
  } = modalProps.ui;

  const onClose = () => {
    isOpen(false);
  };

  return (
    <>
      <div
        className={`fixed w-full h-full top-0 left-0 z-50 transition duration-300 ${modalBackgroundContainer} ${modalBackgroundContainerOpacity} flex justify-center items-center overflow-x-hidden overflow-y-auto`}
      >
        <div
          className={`${modalBackground} ${modalColor} w-11/12 md:max-w-md mx-auto rounded-md shadow-lg z-50 overflow-y-auto`}
        >
          <div className="flex justify-between items-start p-4 gap-4">
            <h2 className="text-xl font-bold">{title}</h2>

            <div className="flex justify-center items-center cursor-pointer">
              <AiOutlineClose className="text-xl font-bold" onClick={onClose} />
            </div>
          </div>

          <div className="py-4 text-left px-4">{message}</div>

          <div className="flex gap-2 items-center w-100 p-4">
            <button
              className={`${buttonABackground} rounded-md px-3 py-1 ${buttonAColor} font-semibold`}
              onClick={actionA?.action}
            >
              {actionA?.title}
            </button>

            <button
              className={`${buttonBBackground} rounded-md px-3 py-1 ${buttonBColor} font-semibold`}
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
