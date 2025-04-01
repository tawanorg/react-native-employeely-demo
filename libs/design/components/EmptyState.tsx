import { StyleSheet, Text, View } from "react-native";
import { useDesign } from "../hooks/useDesign";

export function EmptyState() {
  const { fonts, colors } = useDesign();

  return (
    <View style={styles.container}>
      <Text style={[fonts.heavy, styles.title, { color: colors.text }]}>:D</Text>
      <Text style={[fonts.regular, styles.content, { color: colors.text }]}>
        We don't have any data for you yet
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
  },
  content: {
    fontSize: 16,
  },
});