## Installing

-1- generate package.json file
````
npm init -y
````
-2- install react & react-dom
````
npm install react react-dom --save-dev
````
-3- install webpack webpack-cli webpack-dev-server
````
npm install --save-dev webpack webpack-cli webpack-dev-server
````
-4- install babel-loader @babel/preset-env @babel/preset-react @babel/core
````
npm install --save-dev babel-loader @babel/preset-env @babel/preset-react @babel/core
````
-5- install html-webpack-plugin html-loader
````
npm install --save-dev html-webpack-plugin html-loader
````
-6- modifier le fichier package.json 
 supprimer "test": "echo \"Error: no test specified\" && exit 1"
 ajouter les deux lignes :
    "start": "webpack-dev-server --mode development --watch",
    "build": "webpack --mode production"

-7-ajouter le fichier webpack.config.js

-8-ajoutr le fichier .babelrc

-9-ajouter le dossier /src

-10-ajouter le fichier /src/index.html

-11-ajouter le fichier /src/index.js

-12-ajouter le premier composant App.jsx sous le repertoire /src/component

-13-npm start

-14-ouvrir http://localhost:8080/ (voir résultat pour le bloc test1 dans App.jsx)

-15-install flux
````
npm install --save-dev flux
````
-16-ajouter le dispatcher sous /src/dispatcher

-17-ajouter action

-18-ajouter store

-19-modifier le composant App.jsx

-13-npm start

-14-ouvrir http://localhost:8080/ (voir résultat pour le bloc test2 dans App.jsx)




