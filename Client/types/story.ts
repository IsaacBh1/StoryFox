import { ImageSourcePropType } from "react-native";

export interface Istory {
  title: string;
  teaserImage: ImageSourcePropType;
  wordCount: number;
  readingTime: string;
  chapters: chapter[];
}
export interface chapter {
  text: string;
  image: string;
}
