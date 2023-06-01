const path = require('path')

module.exports = {
  settings:{
    'import/resolver':{
      alias:{
        map:[
          ['@components', path.resolve(__dirname,'./src/components')],
          ['@pages', path.resolve(__dirname,'./src/pages')],
          ['@iconos',path.resolve(__dirname,'./public/iconos')],
          ['@proyectos', path.resolve(__dirname,'./public/proyectos')],
          ['@fotos', path.resolve(__dirname,'./public/fotos')]
        ]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len":["error",{"code":120}], // Especificar 120 de largo maximo en codigo
    "semi":["error","never"] // Desactivar punto y coma
  },
};
