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

export interface chapterResponce {
  title: string;
  text: string;
  image_description: string;
}
export interface ServerResponce {
  title: string;
  cover_image_description: string;
  word_count: number;
  reading_time: string;
  characters: { [key: string]: { description: string } }[];
  chapters: chapterResponce[];
  story_value: string;
}

export interface storyParams {
  gender: string;
  readingLevel: string;
  category: string;
  customPrompt?: string;
}

export interface storyImages {
  teaser_image: string;
  chapter_images: string[];
}
