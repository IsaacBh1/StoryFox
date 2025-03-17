import {
  ImageBackground,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StoryHeader from "@/components/StoryHeader";
import { router } from "expo-router";

interface Props {
  title: string;
  image: ImageSourcePropType;
  children: ReactNode;
  isChapter?: boolean;
  showTitleInTopBar?: boolean;
}
const GenericStoryScreen = ({
  title,
  image,
  children,
  isChapter = false,
  showTitleInTopBar = false,
}: Props) => {
  const handleNext = (id: number) => {
    id > -1
      ? router.push(`/story/chapters/${id}`)
      : router.push(`/story/StoryEnd`);
  };
  const handlePrevious = () => {
    router.back();
  };
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          height: `${isChapter ? "50%" : "60%"}`,
          justifyContent: "space-between",
          borderColor: "black",
          zIndex: -999,
        }}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ height: "105%" }}
        >
          <StoryHeader
            title={showTitleInTopBar ? title : ""}
            key={showTitleInTopBar ? `header-${title}` : ""}
          />
        </ImageBackground>
      </View>
      <View
        style={[
          styles.chapterContainer,
          {
            height: `${isChapter ? "50%" : "40%"}`,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default GenericStoryScreen;

const styles = StyleSheet.create({
  chapterContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
});
