import { Dimensions, Image } from "react-native";
import One from "@/assets/images/onboarding/1.png";
import Two from "@/assets/images/onboarding/2.png";
import Three from "@/assets/images/onboarding/3.png";
import { IsIPAD } from "@/utils/app.constants";
import { scale, verticalScale } from "react-native-size-matters";

export const onBoardingSlides: onBoardingSlidesType[] = [
  {
    color: "#40E0D0",
    title: "Explore",
    image: (
      <Image
        source={One}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subTitle:
      "Find the perfect course to enhance your career prospects and skill set",
  },
  {
    color: "#A7F893",
    title: "Set Your",
    image: (
      <Image
        source={Two}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Own Goal",
    subTitle:
      "Personalize your study plan with flexible timelines that suit you best",
  },
  {
    color: "#FFC0CB",
    image: (
      <Image
        source={Three}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    title: "Complete full",
    secondTitle: "Course",
    subTitle:
      "Achieve certification by completing courses with dedicated effort",
  },
];

// onBoarding Variables
export const MIN_LEDGE = 25;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
