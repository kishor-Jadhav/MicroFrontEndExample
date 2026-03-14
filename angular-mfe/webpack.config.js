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
        "./AngularComponent":
          "./src/app/angular-component/angular-component.component.ts"
      },

      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true }
      }

    })

  ]

};