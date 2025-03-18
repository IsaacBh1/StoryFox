import { Ionicons } from "@expo/vector-icons";

export default function InnerIcon({
  icon = "paw-outline",
  size = 24,
  color = "#000",
  style,
}) {
  return <Ionicons name={icon} size={size} color={color} style={style} />;
}
