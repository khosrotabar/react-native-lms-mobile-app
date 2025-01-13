import { View, Text } from "react-native";

type Props = {
  slide: onBoardingSlidesType;
  totalSlides: number;
};

const Slide = ({ slide, totalSlides }: Props) => {
  return (
    <View>
      <Text>Slide</Text>
    </View>
  );
};

export default Slide;
