
import { StyleSheet, Text, View } from 'react-native';
import { useDesign } from '../hooks/useDesign';
import { HapticTab } from './HapticTab';
import { IconSymbol } from './IconSymbol';

interface Props {
  title: string;
  onBack?: () => void;
}

export const Header = ({ title, onBack }: Props) => {
  const { fonts, colors } = useDesign();

  return (
    <View style={styles.container}>
      {onBack && (
        <HapticTab onPress={onBack}>
          <IconSymbol name="chevron.left" size={24} color={colors.text} />
        </HapticTab>
      )}
      <Text 
        style={[
          styles.title,
          fonts.heavy, 
          { 
            color: colors.text, 
            borderColor: colors.border
          }
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
  },
});
