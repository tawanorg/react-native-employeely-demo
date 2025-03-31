
import { Text, View } from 'react-native';
import { useDesign } from '../../hooks/useDesign';

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
