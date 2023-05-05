const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
// Ce code est une fonction JavaScript appelée `reportWebVitals` qui est utilisée
// pour mesurer et rapporter les indicateurs de performance Web Vitals de votre application web.
// Les Web Vitals sont un ensemble d'indicateurs de performance clés qui sont essentiels
// pour la qualité de l'expérience utilisateur. Voici une explication détaillée
// de chaque partie du code :

// 1. `const reportWebVitals = onPerfEntry => { ... };` : Cette ligne déclare une fonction
// nommée `reportWebVitals` qui accepte un argument `onPerfEntry`. `onPerfEntry` est une fonction
// callback qui sera appelée avec les données de performance.

// 2. `if (onPerfEntry && onPerfEntry instanceof Function) { ... }` : Ce bloc conditionnel
// vérifie si `onPerfEntry` est défini et s'il s'agit d'une instance de la classe Function
// (une fonction). Si ce n'est pas le cas, la fonction `reportWebVitals` ne fera rien.

// 3. `import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { ... });` :
// Cette ligne importe de manière dynamique le module `web-vitals`
// (https://github.com/GoogleChrome/web-vitals), qui fournit des utilitaires
// pour mesurer les Web Vitals. Une fois le module chargé, il extrait les fonctions `getCLS`,
// `getFID`, `getFCP`, `getLCP`, et `getTTFB` du module.

// 4. Les lignes suivantes appellent chacune des fonctions extraites avec `onPerfEntry`
// en tant qu'argument :
//    - `getCLS(onPerfEntry);`
//    - `getFID(onPerfEntry);`
//    - `getFCP(onPerfEntry);`
//    - `getLCP(onPerfEntry);`
//    - `getTTFB(onPerfEntry);`

//    Ces fonctions mesurent respectivement les Web Vitals suivants :
//    - CLS (Cumulative Layout Shift) : mesure la stabilité visuelle de la page.
//    - FID (First Input Delay) : mesure la réactivité de la page aux premières interactions
// de l'utilisateur.
//    - FCP (First Contentful Paint) : mesure le temps qu'il faut pour afficher le premier
// contenu visible de la page.
//    - LCP (Largest Contentful Paint) : mesure le temps qu'il faut pour afficher
// le plus grand élément visible de la page.
//    - TTFB (Time to First Byte) : mesure le temps qu'il faut pour recevoir la première réponse
// du serveur.

// 5. `export default reportWebVitals;` : Cette ligne exporte la fonction `reportWebVitals`
// en tant qu'exportation par défaut du module, ce qui permet de l'importer et de l'utiliser
// dans d'autres parties de votre application.
