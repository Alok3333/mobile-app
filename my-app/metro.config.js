// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// module.exports = config;

// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(config);
