import { chapter, Istory } from "@/types/story";
const summary = require("../../assets/images/test/summary.png");
const ch1 = require("../../assets/images/test/ch1.png");
const ch2 = require("../../assets/images/test/ch2.png");
const ch3 = require("../../assets/images/test/ch3.png");
const ch4 = require("../../assets/images/test/ch4.png");

const chapters: chapter[] = [
  {
    image: ch1,
    text: `Emma loved playing in the forest near her house. One day, while exploring, she heard a soft whisper coming from a tall oak tree.
  “Help me, Emma,” the tree whispered.
  Emma's eyes widened. “Who''s there?” she asked, stepping closer.
  A small squirrel popped out from behind the tree. “It''s the tree! It''s very old and needs help. Some of its roots are trapped under heavy stones.”`,
  },
  {
    image: ch2,
    text: `Emma wanted to help, but the rocks were too heavy. She needed a plan.
  She called out to her animal friends. Soon, a family of rabbits, a wise old owl, and a team of tiny ants arrived.
  “If we all work together, we can do it!” Emma said.
  The rabbits dug around the roots, the ants carried away small pebbles, and the owl used its wings to blow dust away.`,
  },
  {
    image: ch3,
    text: `Slowly, the tree's roots were freed.
  “Thank you, Emma,” the tree whispered. “You listened to nature, and now I can grow strong again.”
  Suddenly, the tree's branches glowed, and tiny golden leaves floated down. Emma caught one in her hands. It shimmered like magic!`,
  },
  {
    image: ch4,
    text: `As Emma walked home, she noticed how beautiful the forest was—the birds singing, the wind dancing through the leaves. She smiled, knowing she had helped nature.
  From that day on, Emma promised to always listen to the whispers of the trees.
  And if you ever find yourself in a quiet forest, listen closely… you might just hear a tree whisper too!s`,
  },
];

const story: Istory = {
  title: "Emma and the Whispering Tree",
  wordCount: 6,
  teaserImage: summary,
  readingTime: "5 ~ 7 min",
  chapters: chapters,
};

export { story, chapters };
