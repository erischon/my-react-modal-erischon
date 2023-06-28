import { useState } from "react";

import { MyModal } from "./lib";
// import { MyModal } from "my-react-modal-erischon";

function ExampleComponent() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const modalProps = {
    title: "Modal Title",
    message: "A message",
    actionA: {
      title: "Action A",
      action: () => {},
    },
    actionB: {
      title: "Action B",
      action: () => {},
    },
    isOpen: setIsModalOpen,
    ui: {
      modalBackgroundContainer: "bg-zinc-600",
      modalBackgroundContainerOpacity: "bg-opacity-100",
      modalBackground: "bg-zinc-100",
      modalColor: "text-black",
      buttonABackground: "bg-orange-600",
      buttonAColor: "text-white",
      buttonBBackground: "bg-orange-600",
      buttonBColor: "text-white",
    },
  };

  return (
    <>
      <div className="">
        <h1>Modal Example</h1>

        {isModalOpen ? <MyModal modalProps={modalProps} /> : null}
      </div>
    </>
  );
}

export default ExampleComponent;
