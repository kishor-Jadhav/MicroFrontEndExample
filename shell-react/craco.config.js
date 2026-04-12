const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  devServer: {
    port: 3001,
    historyApiFallback: false,
  },

  webpack: {
    configure: (webpackConfig) => {
      // 🔥 CRITICAL FIXES
      webpackConfig.output.publicPath = "auto";
      webpackConfig.output.uniqueName = "shell";

      // 🔥 IMPORTANT: merge experiments (not overwrite)
      webpackConfig.experiments = {
        ...webpackConfig.experiments,
        topLevelAwait: true,
      };

      // 🔥 REMOVE CRA runtime chunk (VERY IMPORTANT)
      webpackConfig.optimization.runtimeChunk = false;

      // 🔥 REMOVE splitChunks (IMPORTANT)
      webpackConfig.optimization.splitChunks = false;

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "shell",

          filename: "remoteEntry.js", // 🔥 MUST HAVE

          remotes: {
            reactMfe: "reactMfe@http://localhost:3000/remoteEntry.js",
            angularMfe: "angularMfe@http://localhost:4200/remoteEntry.js",
            reactConceptMfe: "reactConceptMfe@http://localhost:2001/remoteEntry.js",
          },

          exposes: {
            "./shellstore": "./src/storeExpose.js",
            
          },

          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false,
            },
            "@reduxjs/toolkit": {
              singleton: true,
            },
            "react-redux": {
              singleton: true,
            },
          },
        }),
      );

      return webpackConfig;
    },
  },
};
