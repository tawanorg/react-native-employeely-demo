import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { useDesign } from "../hooks/useDesign";

type AvatarSize = 'small' | 'medium' | 'large';

interface Props {
  size: AvatarSize;
  source: string;
  name?: string;
}

export const Avatar = ({ size: defaultSize, source, name }: Props) => {
  const { colors } = useDesign();
  const size = getSize(defaultSize);
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {source ? (
        <>
          {loading && (
            <ActivityIndicator
              style={styles.loadingIndicator}
              size="small"
              color={colors.primary}
            />
          )}
          <Image
            source={{ uri: source }}
            style={[styles.image, { borderColor: colors.border }]}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </>
      ) : (
        <Avatar.Placeholder size={defaultSize} name={name} />
      )}
    </View>
  );
};

type AvatarPlaceholderProps = {
  size: AvatarSize;
  name?: string;
}

Avatar.Placeholder = ({ size: defaultSize, name }: AvatarPlaceholderProps) => {
  const { fonts, colors } = useDesign();
  const size = getSize(defaultSize);
  const initials = getInitials(name ?? '');
  return (
    <View style={[placeholderStyles.container, { backgroundColor: colors.card, borderColor: colors.border, width: size, height: size }]}>
      <Text style={[fonts.bold, placeholderStyles.name, { color: colors.text, fontSize: size / 3 }]}>{initials}</Text>
    </View>
  );
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('');
}

const getSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 40;
    case 'medium':
      return 60;
    case 'large':
      return 80;
  }
}

const placeholderStyles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -10 }, { translateY: -10 }], // Center the indicator
  },
});
