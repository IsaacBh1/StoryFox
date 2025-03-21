import {
  chapter,
  Istory,
  ServerResponce,
  storyImages,
  storyParams,
} from "@/types/story";
import axios, { all } from "axios";
import { ACTIONS } from "tamagui";

const api = axios.create({
  baseURL: "http://392c-154-240-187-41.ngrok-free.app",
});
export const getStoryAsync = async (params: storyParams) => {
  const body = { prompt: params };

  const story = await api.post<{ story: ServerResponce }>(
    "/generate-story",
    body
  );

  return story;
};

export const getImagesAsync = async (story: ServerResponce) => {
  let result: storyImages = {
    teaser_image: "",
    chapter_images: [],
  };

  console.log("Start");

  // Generate teaser image
  const teaserBody = {
    prompt: story.cover_image_description,
    image_name: `${story.title}_teaser`,
  };
  const teaserImage = await api.post<{ image_path: string }>(
    "/generate-image",
    teaserBody
  );
  console.log("Raw Teaser Image Response:", teaserImage.data); // Log the raw response

  result.teaser_image = teaserImage.data.image_path;

  // Generate chapter images
  for (const [index, ch] of story.chapters.entries()) {
    const chapterBody = {
      prompt: ch.image_description,
      image_name: `${story.title}_ch${index}`,
    };
    const chapterImage = await api.post<{ image_path: string }>(
      "/generate-image",
      chapterBody
    );
    console.log(`Raw Chapter ${index} Image Response:`, chapterImage.data); // Log the raw response
    result.chapter_images.push(chapterImage.data.image_path);
  }

  return result;
};

export const loadStoryAsync = async (data: storyParams) => {
  try {
    // Fetch story data
    const storyResponse = (await getStoryAsync(data)).data.story;
    console.log("Story Response", storyResponse);

    // Fetch images for the story
    const images = await getImagesAsync(storyResponse);
    console.log("Images", images);

    // Construct chapters with images
    const allChapters: chapter[] = storyResponse.chapters.map((ch, index) => ({
      text: ch.text,
      image: {
        uri: `${api.defaults.baseURL}/${images.chapter_images
          .at(index)!
          .replace(/^app\//, "")}`,
      },
    }));

    // Construct the final story object
    const story: Istory = {
      title: storyResponse.title,
      storyValue: storyResponse.story_value,
      wordCount: storyResponse.word_count,
      readingTime: storyResponse.reading_time,
      teaserImage: {
        uri: `${api.defaults.baseURL}/${images.teaser_image.replace(
          /^app\//,
          ""
        )}`,
      },
      chapters: allChapters,
    };

    console.log("All story", story);
    return story;
  } catch (error) {
    console.error("Error loading story:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
