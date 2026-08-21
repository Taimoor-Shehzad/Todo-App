import { View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");

  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const addTodo = useMutation(api.todos.addTodo);

  async function handleNewTodo() {
    if (newTodo.trim()) {
      try {
        await addTodo({
          text: newTodo,
        });
        setNewTodo("");
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
  }

  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Todo Here"
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleNewTodo}
          placeholderTextColor={colors.textMuted}
        ></TextInput>
        <LinearGradient
          colors={
            newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
          }
          style={[
            styles.addButton,
            !newTodo.trim() && styles.addButtonDisabled,
          ]}
        >
          <Ionicons
            onPress={handleNewTodo}
            name="add"
            size={24}
            color="#fff"
          ></Ionicons>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TodoInput;
