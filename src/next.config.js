const fs = require("fs");
const path = require("path");
const withCSS = require("@zeit/next-css");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withOptimizedImages = require("next-optimized-images");

module.exports = withCSS(
	withOptimizedImages({
		alias: {
			"express-asyncify": path.join(__dirname, "src", "services", "index", "typings", "express-asyncify"),
			"@mui/styled-engine": "@mui/styled-engine-sc",
		},
		distDir: "../dist",
		images: {
			domains: ["localhost"],
		},
		env: {
			MODE_ENV: process.env.MODE_ENV,
			DOMAIN: process.env.DOMAIN,
			BASE_URL: process.env.BASE_URL,
			API_PATH: process.env.API_PATH,
		},
		imagesName: "[hash].[ext]",
		target: "serverless",
		future: {
			webpack5: true,
		},
		cssModules: true,
		compress: true,
		webpack: (config, { isServer }) => {
			if (isServer) {
				const antStyles = /antd\/.*?\/style.*?/;
				const origExternals = [...config.externals];
				config.externals = [
					(context, request, callback) => {
						if (request.match(antStyles)) {
							return callback();
						}
						if (typeof origExternals[0] === "function") {
							origExternals[0](context, request, callback);
						} else {
							callback();
						}
					},
					...(typeof origExternals[0] === "function" ? [] : origExternals),
				];

				config.module.rules.push({
					test: /\.svg$/,
					use: ["@svgr/webpack"],
				});

				const prod = process.env.MODE_ENV === "production";
				config.resolve.plugins = [
					new TsconfigPathsPlugin({
						configFile: path.resolve(__dirname, "./tsconfig.json"),
					}),
				];
				config.mode = prod ? "production" : "development";
				// config.devtool = prod ? "hidden-source-map" : "eval";
				config.devtool = "eval";
				// config.node = {
				// 	fs: "empty",
				// };
			}
			return config;
		},
	}),
);
