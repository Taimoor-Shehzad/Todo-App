import { View, Text } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Header = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const allTodos = useQuery(api.todos.getTodos);
  const totalTodos = allTodos ? allTodos.length : 0;
  const completedTodos = allTodos
    ? allTodos.filter((todo) => todo.isCompleted).length
    : 0;
  const progressPercentage =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={styles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>
        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={styles.subtitle}>
            {" "}
            {completedTodos} of {totalTodos} Completed{" "}
          </Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(progressPercentage)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
