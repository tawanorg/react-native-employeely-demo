import { StyleSheet, Text, View } from "react-native";
import { useDesign } from "../hooks/useDesign";

export function EmptyState() {
  const { fonts } = useDesign();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {
        ...fonts.heavy,
      }]}>EmptyState</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});