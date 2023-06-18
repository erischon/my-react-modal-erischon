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
  const [isModalOpen, setIsModalOpen] = useState(true);

  const modalProps = {
    title: "Modal Title",
    message: "A message",
    actionA: {
      title: "Action",
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
- ui : un object

## Versions

### 0.0.3 : Ajout d’une UI dynamique

- On peut paramétrer :
    - le background du container
    - l’opacité du background du container
    - le background de la modale
    - la couleur du texte de la modale
    - le background du bouton A
    - la couleur du texte du bouton A
    - le background du bouton B
    - la couleur du texte du bouton B

### 0.0.2 : Minor

- Ajout du README

### 0.0.1 : Version Initiale

### Features

- Affichage d’une modale
- informations dynamiques
    - Le titre de la modale
    - Un message
    - une Action A
    - une Action B
    - un Etat