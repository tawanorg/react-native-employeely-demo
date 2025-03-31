import { Header } from '@design/components/Header';
import { StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Header title="Explore" />
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
