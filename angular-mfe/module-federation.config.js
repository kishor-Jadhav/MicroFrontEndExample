const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {

  output: {
    uniqueName: "angularMfe",
    publicPath: "auto"
  },

  optimization: {
    runtimeChunk: false
  },

  plugins: [

    new ModuleFederationPlugin({

      name: "angularMfe",

      filename: "remoteEntry.js",

      exposes: {
         './AngularApp': './src/bootstrap.ts'
      },

      shared: {
        "@angular/core": { singleton: true, strictVersion: false },
        "@angular/common": { singleton: true, strictVersion: false },
        "@angular/router": { singleton: true, strictVersion: false }
      }

    })

  ]

};