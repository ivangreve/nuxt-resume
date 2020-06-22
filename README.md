
# Resume Nuxt + i18n (Multilanguage) ✨🌍

## Pre-Requisites 

- Install [NodeJS](https://nodejs.org/es/)


##  How to start? 🥳
1) *Clone* the **repository**
2) *Install* dependencies:
		-  `$ npm install`
3) *Build* application:
		-  `$ npm run build`
4) *Run* in **dev mode**:
		-  `$ npm run dev`


## Configuration ⚙

***You can easily customize the template and the languages!*** 🚀
- To do this, you have to edit the **locales** files as you want! 📄

![locates](./documentation/localefiles.jpg)

### Languages Files 🌍
**English**: `./locales/en.json`
**Spanish** `./locales/es.json`

### Add new Language
1.) *Create* a new language file in the folder `./locales` :
- **eg.** : `fr.json`
2) *Add* *i18n* file configuration in the ***nuxt.config.js***, 
```javascript
i18n: {
	locales: ['en', 'es', 'fr'],
	defaultLocale:  'en',
	vueI18n: {
		fallbackLocale:  'en',
		messages: {
			en:  require('./locales/en.json'),
			es:  require('./locales/es.json'),
			fr:  require('./locales/fr.json')
		}
	}
},
```
3) You can easily change the actual language by following way:
```html
<div>
	<v-btn small :to="switchLocalePath('en')" depressed>EN</v-btn>
	<v-btn small :to="switchLocalePath('es')" depressed>ES</v-btn>
	<v-btn small :to="switchLocalePath('fr')" depressed>FR</v-btn>
</div>
```

##  Generate static code 🥳
1) In the root folder, run the following command:
		-  `$ npm run generate`
2) All the *generated* code will be apear in the `./dist` folder
```bash

## Used Technologies/Tools 🔧🦾

- [VueJs](https://vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [i18n](https://nuxtjs.org/examples/i18n/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
