import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ProgressStats from "@/components/ProgressStats";

const Settings = () => {
  const [isSync, setIsSync] = useState(true);
  const [notifications, setNotification] = useState(true);

  const { colors, toggleDarkMode } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={styles.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>
            <Text style={styles.title}>Settings</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <ProgressStats />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
