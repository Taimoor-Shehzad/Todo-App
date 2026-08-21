import { View, Text, Touchable, TouchableOpacity, Alert } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { anyApi } from "convex/server";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const DangerZone = () => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);
  const resetTodos = useMutation(api.todos.clearAllTodos);

  const handleReset = async () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete ALL",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await resetTodos();
              Alert.alert(
                "App Reset",
                `Succesfully deleted ${result.deleteCount} todo${result.deleteCount === 1 ? "" : "s"} Your app has been reset.`,
              );
            } catch (error) {
              console.log("Error deleting all todos", error);
              Alert.alert("Error", "Failed To Reset App");
            }
          },
        },
      ],
    );
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitleDanger}>Danger Zone</Text>
      <TouchableOpacity
        style={[styles.actionButton, { borderBottomWidth: 0 }]}
        activeOpacity={0.7}
        onPress={handleReset}
      >
        <View style={styles.actionLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={styles.actionIcon}
          >
            <Ionicons name="warning" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={styles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
