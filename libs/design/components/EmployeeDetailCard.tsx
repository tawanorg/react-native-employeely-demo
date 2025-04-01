import { Avatar } from '@/libs/design/components/Avatar';
import { useDesign } from '@/libs/design/hooks/useDesign';
import { darken } from '@/libs/design/utils/colors';
import { Employee } from '@/libs/types';
import { getEmployeeType } from '@/libs/utils/employee';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EmployeeDetailCard({ employee }: { employee: Employee }) {
  const { fonts, colors } = useDesign();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.contentContainer, { paddingTop: top / 2, paddingBottom: bottom }]}>
        <View style={styles.avatarContainer}>
          <Avatar name={employee?.full_name} size="large" source={employee.photo_url_large ?? ''} />
          <Text style={[fonts.bold, styles.name, { color: colors.text }]}>{employee?.full_name}</Text>
        </View>
        <EmployeeDetailCard.Section title="Arrangement">
          {getEmployeeType(employee?.employee_type)}
        </EmployeeDetailCard.Section>
        <EmployeeDetailCard.Section title="Team">
          {employee?.team}
        </EmployeeDetailCard.Section>
        <EmployeeDetailCard.Section title="Biography">
          {employee?.biography}
        </EmployeeDetailCard.Section>
      </ScrollView>
      <EmployeeDetailCard.Contact>
        <EmployeeDetailCard.ContactItem title="Email" value={employee?.email_address ?? ''} />
        <EmployeeDetailCard.ContactItem title="Phone" value={employee?.phone_number ?? ''} />
      </EmployeeDetailCard.Contact>
    </View>
  );
}

EmployeeDetailCard.Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const { fonts, colors } = useDesign();
  return (
    <View style={sectionStyles.section}>
      <Text style={[fonts.bold, sectionStyles.sectionTitle, { color: darken(colors.text, 100) }]}>{title}</Text>
      <Text style={[fonts.regular, sectionStyles.sectionContent, { color: colors.text }]}>{children}</Text>
    </View>
  );
};

EmployeeDetailCard.Contact = ({ children }: { children: React.ReactNode }) => {
  const { fonts, colors } = useDesign();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[sectionStyles.contact, { bottom, backgroundColor: colors.card }]}>
      <Text style={[fonts.bold, sectionStyles.sectionTitle, { color: colors.text, marginBottom: 16 }]}>Contact</Text>
      {children}
    </View>
  );
};

EmployeeDetailCard.ContactItem = ({ title, value }: { title: string, value: string }) => {
  const { fonts, colors } = useDesign();
  return (
    <View style={sectionStyles.section}>
      <Text style={[fonts.bold, sectionStyles.sectionTitle, { color: darken(colors.text, 100) }]}>{title}</Text>
      <Text style={[fonts.regular, sectionStyles.sectionContent, { color: colors.text }]}>{value}</Text>
    </View>
  );
};

const sectionStyles = StyleSheet.create({
  section: {
    marginBottom: 16,
    flexDirection: 'column',
    gap: 4,
  },
  sectionTitle: {
    fontSize: 16,
  },
  sectionContent: {
    fontSize: 16,
  },
  contact: {
    padding: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: 16,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    gap: 16,
  },
  name: {
    fontSize: 24,
  },
  type: {
    fontSize: 16,
  },
  team: {
    fontSize: 16,
  },
  biography: {
    fontSize: 16,
  },
});
