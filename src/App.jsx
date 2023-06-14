import { useState } from "react";

import MyModal from "./lib";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalProps = {
    title: "Employee created successfully",
    message: "What do you want to do next?",
    actionA: {
      title: "Back to creation form",
      action: () => {
        setIsModalOpen(false);
      },
    },
    actionB: {
      title: "Go to employee list",
      action: () => {
        navigate("/employee");
      },
    },
    isOpen: setIsModalOpen,
  };

  return (
    <>
      <h1>My React Modal</h1>

      {isModalOpen ? <MyModal modalProps={modalProps} /> : null}
    </>
  );
}

export default App;
