import { useState } from "react";

import MyModal from "my-react-modal-erischon";

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
  };

  return (
    <>
      <h1>Modal Example</h1>

      {isModalOpen ? <MyModal modalProps={modalProps} /> : null}
    </>
  );
}

export default ExampleComponent;
