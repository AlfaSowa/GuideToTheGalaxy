const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();

module.exports = enhance({
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
      {
        test: /\.(png|jpg)$/i,

        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
              encoding: "base64",
            },
          },
        ],
      }
    );

    return config;
  },
  sassOptions: {
    includePaths: ["./styles"],
    prependData: '@import "./variables.scss";',
  },
});
