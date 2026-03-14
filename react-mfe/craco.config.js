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
            "./ReactComponent": "./src/ReactComponent"
          },

          shared: {
            react: {
              singleton: true,
              requiredVersion: false
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false
            }
          }

        })

      );

      return webpackConfig;
    }
  }
};