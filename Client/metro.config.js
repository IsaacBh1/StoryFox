const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const { withNativeWind } = require("nativewind/metro");
const { withTamagui } = require("@tamagui/metro-plugin");

// Apply NativeWind
const nativeWindConfig = withNativeWind(config, { input: "./global.css" });

// Apply Tamagui
const tamaguiConfig = withTamagui(nativeWindConfig, {
  components: ["tamagui"],
  config: "./tamagui.config.ts",
  outputCSS: "./tamagui-web.css",
});

module.exports = tamaguiConfig;
