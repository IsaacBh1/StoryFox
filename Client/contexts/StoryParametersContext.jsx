import React, { createContext, useContext, useState } from 'react';

const StoryParametersContext = createContext();

export const StoryParametersProvider = ({ children }) => {
  const [storyParametersSettings, setStoryParametersSettings] = useState({
    category: null,
    customPrompt: '',
    gender: 'Boy',
    readingSkill: null
  });

  const updateSettings = (newSettings) => {
    setStoryParametersSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <StoryParametersContext.Provider value={{ storyParametersSettings, updateSettings }}>
      {children}
    </StoryParametersContext.Provider>
  );
};

export const useStoryParameters = () => useContext(StoryParametersContext);