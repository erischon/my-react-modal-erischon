# My Modal

Un component React pour afficher une modale dynamique.

## Installation

```powershell
yarn add my-react-modal-erischon

#or

npm i my-react-modal-erischon@latest
```

## Usage

```jsx
import { useState } from "react";

import MyModal from "my-react-modal-erischon";

function ExampleComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
```

Tous les paramètres sont obligatoires. Les types sont :

- title : un string
- message : un string
- actionA : un object
- actionB : un objectt
- isOpen : un hook useState

## Versions

### 0.0.1 : Version Initiale

### Features

- Affichage d’une modale
- informations dynamiques
    - Le titre de la modale
    - Un message
    - une Action A
    - une Action B