import { FunctionComponent } from "react";
import { ImageSourcePropType } from "react-native";

export interface Istory {
  title: string;
  teaserImage: ImageSourcePropType;
  wordCount: number;
  readingTime: string;
  chapters: chapter[];
  storyValue: string;
}
export interface chapter {
  text: string;
  image: ImageSourcePropType;
}
export type ButtonIconProps = { color?: any; size?: any };
export type IconProp =
  | JSX.Element
  | FunctionComponent<ButtonIconProps>
  | ((props: ButtonIconProps) => any)
  | null;
