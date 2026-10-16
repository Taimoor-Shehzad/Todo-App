import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZone from "@/components/DangerZone";
import Prefrences from "@/components/Prefrences";
import ProgressStats from "@/components/ProgressStats";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";

const Settings = () => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <View style={styles.safeArea}>
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <ProgressStats />
          <Prefrences />
          <DangerZone />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Settings;
