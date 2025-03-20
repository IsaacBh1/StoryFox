import { IconProp } from "@/types/story";
import {
  GestureResponderEvent,
  OpaqueColorValue,
  StyleSheet,
} from "react-native";
import { Button, GetThemeValueForKey } from "tamagui";

interface Props {
  icon: IconProp;
  title: string;
  backgroundColor: string;
  borderColor?:
    | OpaqueColorValue
    | GetThemeValueForKey<"borderColor">
    | undefined;
  onPress: (event: GestureResponderEvent) => void;
}

export default function MainCustomButton({
  backgroundColor,
  borderColor,
  icon,
  title,
  onPress,
}: Props) {
  const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: `${backgroundColor}`,
      borderColor: `${borderColor?.toString() ?? ""}`,
    },
  });

  return (
    <Button
      onPress={onPress}
      color={"#1C274C"}
      iconAfter={icon}
      style={styles.button}
      size={"$5"}
      borderTopLeftRadius={50}
      borderTopRightRadius={50}
      borderBottomLeftRadius={50}
      borderBottomRightRadius={50}
      borderColor={borderColor ?? undefined}
    >
      {title}
    </Button>
  );
}
