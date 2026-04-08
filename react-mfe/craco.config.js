const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {

  devServer: {
    port: 3000,
    historyApiFallback: true
  },

  webpack: {
    configure: (webpackConfig) => {

      // IMPORTANT
      webpackConfig.output.publicPath = "auto";

      webpackConfig.plugins.push(

        new ModuleFederationPlugin({

          name: "reactMfe",

          filename: "remoteEntry.js",

          exposes: {
            "./ReactComponent": "./src/App"
          },
          remotes: {
            shell: "shell@http://localhost:3001/remoteEntry.js"
          },
         shared: {
          react: {
            singleton: true,
            requiredVersion: false
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false
          },
          "@reduxjs/toolkit": {
            singleton: true,
            
          },
          "react-redux": {
            singleton: true,
            
          }
}

        })

      );

      return webpackConfig;
    }
  }
};