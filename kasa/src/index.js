// Ce code est un fichier d'entrée principal pour une application React.
// Je vais expliquer chaque ligne:

// 1. `import './scss/styles.scss';` : Cette ligne importe un fichier de styles SCSS
// (un langage de préprocesseur CSS) et l'applique aux composants React.
import "./scss/styles.scss";

// 2. `import React from 'react';` : Ici, on importe la bibliothèque React pour pouvoir
// utiliser ses fonctionnalités dans ce fichier.
import React from "react";

// 3. `import ReactDOM from 'react-dom/client';` : On importe le package ReactDOM,
// qui fournit des méthodes spécifiques au DOM (Document Object Model) pour manipuler
// le rendu des composants React.
import ReactDOM from "react-dom/client";

// 4. `import App from './App';` : On importe le composant principal de l'application,
// généralement appelé `App`, depuis le fichier `App.js`.
import App from "./App";

// 5. `import reportWebVitals from './reportWebVitals';` : Cette ligne importe une fonction
// pour mesurer les performances de l'application en utilisant des Web Vitals
// (métriques pour la performance et la qualité d'une page web).
import reportWebVitals from "./reportWebVitals";

// 6. `const root = ReactDOM.createRoot(document.getElementById('root'));` :
// On crée un "root" pour notre application React en utilisant la méthode `createRoot()`.
// Cette méthode prend un élément DOM comme argument, ici on sélectionne un élément avec
// l'identifiant 'root'. Cela indique où notre application React sera rendue dans le HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));

// `root.render()` est une méthode qui prend un élément React et le rend à l'intérieur
// de l'élément DOM spécifié lors de la création du "root". Dans notre cas, il rend
// le composant `App` enveloppé par `React.StrictMode` dans l'élément DOM avec l'identifiant 'root'.
root.render(
  // 7-9. Le bloc suivant est utilisé pour rendre notre composant `App`:

  // `React.StrictMode` est un composant qui vérifie les problèmes potentiels dans
  // l'application pendant le développement. En enveloppant le composant `App` avec
  // `React.StrictMode`, on s'assure que notre code suit les meilleures pratiques
  // et évite l'utilisation de fonctionnalités obsolètes.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
