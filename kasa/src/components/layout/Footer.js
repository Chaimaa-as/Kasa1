// 1. importe la bibliothèque React, nécessaire pour créer des composants React.
import React from "react";

// 2. importe un autre composant nommé "LogoFooter" depuis un fichier appelé "LogoFooter.js"
import LogoFooter from "./LogoFooter";

// 3. Cette ligne déclare une fonction appelée "Footer" qui sera le composant React.
export default function Footer() {
  return (
    <footer>
      <div>
        <LogoFooter />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
