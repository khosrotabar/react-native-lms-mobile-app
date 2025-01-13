import Slide from "@/components/onboarding/Slide";
import Slider from "@/components/onboarding/Slider";
import { onBoardingSlides } from "@/configs/constants";
import { useState } from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const OnboardingPage = () => {
  const [index, setIndex] = useState<number>(0);
  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];

  return (
    <GestureHandlerRootView className="flex-1">
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && <Slide slide={prev} totalSlides={onBoardingSlides.length} />
        }
        next={
          next && <Slide slide={prev} totalSlides={onBoardingSlides.length} />
        }
      >
        <View></View>
      </Slider>
    </GestureHandlerRootView>
  );
};

export default OnboardingPage;
