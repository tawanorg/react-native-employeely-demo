import { employeeApi } from '@/libs/client/api/employee';
import { Header } from '@/libs/design/components';
import EmployeeDetailCard from '@/libs/design/components/Employee/EmployeeDetailCard';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EmployeeDetail() {
  const { employeeId } = useLocalSearchParams<{ employeeId: string }>();
  const { top } = useSafeAreaInsets();
  const router = useRouter();
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
    <SafeAreaView style={styles.container}>
      <EmployeeDetailCard employee={employee} />
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
