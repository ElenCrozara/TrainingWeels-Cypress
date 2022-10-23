const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cvedym',

  e2e: {
    baseUrl:'https://training-wheels-qaninja.herokuapp.com'
  }
})


