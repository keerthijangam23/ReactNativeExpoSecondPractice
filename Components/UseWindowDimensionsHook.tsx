import { View, Text, useWindowDimensions } from "react-native";

export default function UseWindowDimensionsHook() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const windowScale = useWindowDimensions().fontScale;
  const windowFontScale = useWindowDimensions().scale;

  return (
    <View
      style={{
        flex: 1,
        width: windowWidth > 500 ? "50%" : "100%",
        height: windowHeight > 500 ? "50%" : "100%",
        backgroundColor: "pink",
      }}
    >
      <Text>
        Helloo {windowScale} is windowScale , {windowFontScale} is
        windowFontScale
      </Text>
    </View>
  );
}
