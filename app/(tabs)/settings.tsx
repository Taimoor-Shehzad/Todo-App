import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";

const Settings = () => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <SafeAreaView>
      <Text>settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
