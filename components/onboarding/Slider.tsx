import { View, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

type SlideProps = {
  index: number;
  children: JSX.Element;
  prev?: JSX.Element;
  next: JSX.Element;
  setIndex: (value: number) => void;
};

const Slider = ({ index, children, prev, next, setIndex }: SlideProps) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);

  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Slider;
