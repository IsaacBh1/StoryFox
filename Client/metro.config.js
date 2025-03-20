const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const { withNativeWind } = require("nativewind/metro");
const { withTamagui } = require("@tamagui/metro-plugin");

// Add SVG support by extending sourceExts
config.resolver.sourceExts.push("svg");

// Apply NativeWind and Tamagui
const nativeWindConfig = withNativeWind(config, { input: "./global.css" });
const tamaguiConfig = withTamagui(nativeWindConfig, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui-web.css",
});

module.exports = tamaguiConfig;
