
# Nuxt Resume + i18n (Multilanguage) ✨🌍

An easy way to **build** your own personal web resume! 💪

## [Check the Demo 💾](https://manhcuongdtbk.github.io/nuxt-resume/)

## Pre-Requisites

- Install [NodeJS](https://nodejs.org/en/)

## How to start? 🥳

1. **Clone** the **repository**

2. **Install** dependencies: `$ npm install`

3. **Build** application: `$ npm run build`

4. **Run** in **dev mode**: `$ npm run dev`

## Configuration ⚙

***You can easily customize the template and the languages!*** 🚀

### Languages Files 🌍

**English**: `./locales/en.json`

**Vietnamese** `./locales/vi.json`

### Add new Language

1. **Create** a new language file in the folder `./locales` (**eg.** : `vi.json`)

2. **Change** **i18n** configuration in the ***nuxt.config.js***,

   ```javascript
     i18n: {
       locales: ['en', 'vi'],
       defaultLocale:  'en',
       vueI18n: {
         fallbackLocale:  'en',
         messages: {
           en:  require('./locales/en.json'),
           vi:  require('./locales/vi.json'),
         }
       }
     }
   ```

3. You can easily change the actual language by following way:

   ```html
     <div>
       <nuxt-link class="btn btn-light" :to="switchLocalePath('en')">EN</nuxt-link>
       <nuxt-link class="btn btn-light" :to="switchLocalePath('vi')">VI</nuxt-link>
     </div>
   ```

## Generate static code 🥳

1. In the **root** folder, run the following command: `$ npm run generate`

2. All the **generated** code will be apear in the `./dist` folder.

## Used Technologies/Tools 🔧🦾

- [VueJs](https://vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [i18n](https://nuxtjs.org/examples/i18n/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
