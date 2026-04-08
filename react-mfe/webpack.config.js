const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {

  mode: "development",

  devServer: {
    port: 3000
  },

  plugins: [

    new ModuleFederationPlugin({

      name: "reactMfe",

      filename: "remoteEntry.js",

      exposes: {
        "./ReactComponent": "./src/ReactComponent"
      },

      remotes: {
        shell: "shell@http://localhost:3001/remoteEntry.js"
      },

      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }

    })

  ]

};