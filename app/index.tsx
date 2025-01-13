import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";

export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const subscription = () => {
      const token = SecureStore.getItem("accessToken");
      setLoggedInUser(token ? true : false);
    };

    subscription();
  }, []);

  return loading ? (
    <View className="w-full flex-1 items-center justify-center"></View>
  ) : (
    <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
  );
}
