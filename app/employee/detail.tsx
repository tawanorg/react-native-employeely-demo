import { employeeApi } from '@/libs/client/api/employee';
import { Header } from '@/libs/design/components';
import { Avatar } from '@/libs/design/components/Avatar';
import { useDesign } from '@/libs/design/hooks/useDesign';
import { darken } from '@/libs/design/utils/colors';
import { getEmployeeType } from '@/libs/utils/employee';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EmployeeDetail() {
  const { employeeId } = useLocalSearchParams<{ employeeId: string }>();
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();
  const { fonts, colors } = useDesign();
  const navigation = useNavigation();
  const { data, isLoading } = useQuery({
    queryKey: ['employee', employeeId],
    queryFn: () => employeeApi.getEmployeeById('employees', employeeId),
    enabled: !!employeeId,
  });

  const employee = useMemo(() => data, [data, employeeId]);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={{ paddingTop: top }}>
          <Header title={employee?.full_name ?? 'Employee Detail'} onBack={() => router.back()} />
        </View>
      ),
    });
  }, [employee]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!employee) {
    return <Text>Employee not found</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.contentContainer, { paddingTop: top / 2, paddingBottom: bottom }]}>
        <View style={styles.avatarContainer}>
          <Avatar name={employee?.full_name} size="large" source={employee.photo_url_large ?? ''} />
          <Text style={[fonts.bold, styles.name, { color: colors.text }]}>{employee?.full_name}</Text>
        </View>
        <EmployeeDetail.Section title="Arrangement">
          {getEmployeeType(employee?.employee_type)}
        </EmployeeDetail.Section>
        <EmployeeDetail.Section title="Team">
          {employee?.team}
        </EmployeeDetail.Section>
        <EmployeeDetail.Section title="Biography">
          {employee?.biography}
        </EmployeeDetail.Section>
      </ScrollView>
      <EmployeeDetail.Contact>
        <EmployeeDetail.ContactItem title="Email" value={employee?.email_address ?? ''} />
        <EmployeeDetail.ContactItem title="Phone" value={employee?.phone_number ?? ''} />
      </EmployeeDetail.Contact>
    </View>
  );
}

EmployeeDetail.Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const { fonts, colors } = useDesign();
  return (
    <View style={sectionStyles.section}>
      <Text style={[fonts.bold, sectionStyles.sectionTitle, { color: darken(colors.text, 100) }]}>{title}</Text>
      <Text style={[fonts.regular, sectionStyles.sectionContent, { color: colors.text }]}>{children}</Text>
    </View>
  );
};

EmployeeDetail.Contact = ({ children }: { children: React.ReactNode }) => {
  const { fonts, colors } = useDesign();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[sectionStyles.contact, { bottom, backgroundColor: colors.card }]}>
      <Text style={[fonts.bold, sectionStyles.sectionTitle, { color: colors.text, marginBottom: 16 }]}>Contact</Text>
      {children}
    </View>
  );
};

EmployeeDetail.ContactItem = ({ title, value }: { title: string, value: string }) => {
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
