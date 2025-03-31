import { Header } from '@design/components/Header';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
