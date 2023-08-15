/* eslint-disable no-unused-vars */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../server/public'),
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:1337'
      }
    }
  }
})
