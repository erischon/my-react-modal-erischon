# My Modal

Un component React qui permet d’afficher une modale dynamique.

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
- actionB : un object
- isOpen : un hook useState
- ui : un object

## Versions

### 0.0.4 :

- Ajout de valeurs par défaut pour les paramètres

### 0.0.3 : Ajout d’une UI dynamique

- On peut maintenant paramétrer :
    - le background du container (modalBackgroundContainer)
    - l’opacité du background du container (modalBackgroundContainerOpacity)
    - le background de la modale (modalBackground)
    - la couleur du texte de la modale (modalColor)
    - le background du bouton A (buttonABackground)
    - la couleur du texte du bouton A (buttonAColor)
    - le background du bouton B (buttonBBackground)
    - la couleur du texte du bouton B (buttonBColor)
    
    en utilisant des class Tailwindcss
    
    - [Background Color](https://tailwindcss.com/docs/background-color)
    - [Color](https://tailwindcss.com/docs/text-color)

### 0.0.2 : Minor

- Ajout du README

### 0.0.1 : Version Initiale

### Features

- Affichage d’une modale à la demande
- Informations dynamiques de la modale
    - Le titre de la modale
    - Un message
    - une Action A
    - une Action B
    - un Etat