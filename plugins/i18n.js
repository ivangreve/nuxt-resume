// ~/plugins/myplugin.js

export default ({ app }) => {
    // Get localized path for homepage
    const localePath = app.localePath('index')
    // Get path to switch current route to Spanish
    const switchLocalePath = app.switchLocalePath('es')
  }
  