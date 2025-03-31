import { useDesign } from '@design/hooks/useDesign';
import { Text, View } from 'react-native';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const { fonts, colors } = useDesign();

  return (
    <View>
      <Text style={[fonts.heavy, { color: colors.text, fontSize: 24 }]}>{title}</Text>
    </View>
  );
};
