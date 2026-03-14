const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {

  devServer: {
    port: 3001
  },

  plugins: [

    new ModuleFederationPlugin({

      name: "shell",

      remotes: {

        reactMfe: "reactMfe@http://localhost:3000/remoteEntry.js",

        angularMfe: "angularMfe@http://localhost:4200/remoteEntry.js"

      },

      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }

    })

  ]

};