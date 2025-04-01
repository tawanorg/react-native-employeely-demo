import { Avatar } from '@/libs/design/components/Avatar';
import { useDesign } from '@/libs/design/hooks/useDesign';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeCard() {
  const { fonts, colors } = useDesign();
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar name="Tew Tawan" size="large" source="https://tawan.org/_next/image?url=%2Fstatic%2Ftawan.jpeg&w=256&q=75" />
        <View style={styles.nameContainer}>
          <Text style={[fonts.bold, styles.name, { color: colors.text }]}>Tew Tawan</Text>
          <Text style={[fonts.regular, styles.role, { color: colors.text }]}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[fonts.regular, styles.description, { color: colors.text }]}>
          This demo app is made with ❤ for opportunity to work with Different.com.au
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  name: {
    fontSize: 24,
  },
  role: {
    fontSize: 16,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 32,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
