// La Base de Données qu'on va utiliser dans le projet
export const portfolioData = [
  {
    id: 1,
    name: 'Booki-hébergement',
    languages: ['html5', 'css'],
    languagesIcons: [ 'fab fa-html5', 'fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/booki-hebergement',
    info: "Intégration de l'interface du site avec du code HTML et CSS en respectant les maquettes desktop, tablette et mobile du site. Les textes “Hébergements” et “Activités”, situés dans l'en-tête, sont des liens, qui mènent respectivement vers la section “Hébergements à Marseille” et “Activités à Marseille”. Le champ de recherche est un champ de saisie. Chaque carte d'hébergement ou d'activité est cliquable dans son intégralité.",
    picture: './images/project1.jpg',
    site: "https://saniok78.github.io/booki-hebergement/"
  },
  {
    id: 2,
    name: 'Ohmyfood',
    languages: ['html5', 'css'],
    languagesIcons: ['fab fa-html5', 'fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/AlexandruGhilev_3_17022022',
    info: "Intégration de l'interface du site avec du code HTML, SASS/CSS, Flex Box. Les pages webs sont dynamisées avec des animations CSS  au survol, à l’arrivée sur la page, les plats apparaissent progressivement avec un léger décalage dans le temps, un par un, par groupe “Entrée”, “Plat” et “Dessert”.",
    picture: './images/project2.jpg',
    site: "https://saniok78.github.io/AlexandruGhilev_3_17022022/"
  },
  {
    id: 3,
    name: 'Quizz_Js',
    languages: ['javascript','html5','css'],
    languagesIcons: ['fab fa-js','fab fa-html5','fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/quizz_js',
    info: "Intégration l'interface du site avec du code HTML, CSS et JavaScript. Application dynamique grâce à JavaScript.",
    picture: './images/project3.jpg',
    site: "https://saniok78.github.io/quizz_js/"
  },
  {
    id: 4,
    name: 'Calcul IMC',
    languages: ['javascript','fab fa-html5','css'],
    languagesIcons: ['fab fa-js','fab fa-html5','fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/app-calcul_imc',
    info: "Intégration l'interface du site avec du code HTML, CSS et JavaScript. Application dynamique grâce à JavaScript.",
    picture: './images/project4.jpg',
    site: "https://saniok78.github.io/app-calcul_imc/"
  },
  {
    id: 5,
    name: 'Kasa',
    languages: ['react','css'],
    languagesIcons: ['fab fa-react', 'fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/projet-kasa',
    info: "Application codé en ReactJs et CSS. Affichage des composants en récupérant les données depuis le fichier JSON. Utilisation des ‘props’ pour véhiculer les infos entre les composants. Gestion des routes avec React Router. Page « Erreur » personnalisé pour chaque route inexistante.",
    picture: './images/project5.jpg',
    site: "https://saniok78.github.io/projet-kasa/"
  },
  {
    id: 6,
    name: 'E-commerce',
    languages: ['react', 'css'],
    languagesIcons: ['fab fa-react', 'fab fa-css3-alt'],
    source: 'https://github.com/SANIOK78/pr_e-commerce',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    picture: './images/project6.jpg',
    site: "https://saniok78.github.io/e-commerce/"
  },
]