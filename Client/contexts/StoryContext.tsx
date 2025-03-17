import { StyleSheet, Text, View } from "react-native";
import React, {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { Istory } from "@/types/story";

interface StoryContextType {
  currentStory: Istory | undefined;
  setCurrentStory: React.Dispatch<React.SetStateAction<Istory | undefined>>;
}

export const Context = createContext<StoryContextType | undefined>(undefined);
const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [currentStory, setCurrentStory] = useState<Istory | undefined>(
    undefined
  );
  return (
    <Context.Provider value={{ currentStory, setCurrentStory }}>
      {children}
    </Context.Provider>
  );
};
const useStory = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
export { useStory, StoryProvider };
