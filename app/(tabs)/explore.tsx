import { employeeApi } from '@/libs/client/api/employee';
import { EmptyState, Header } from '@/libs/design/components';
import { EmployeeCard } from '@/libs/design/components/EmployeeCard';
import { Employee } from '@/libs/types';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();

  const { data: response, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: () => employeeApi.getEmployees('employees'),
  });

  const isRefreshing = isFetching || isLoading;

  const renderItem = ({ item }: { item: Employee }) => {
    return (
      <EmployeeCard 
        key={item.uuid}
        onPress={() => 
          router.push({ 
            pathname: '/employee/detail', 
            params: { employeeId: item.uuid }
          })
        }
        employee={item} 
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Explore" />
      <FlatList
        data={response?.employees}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refetch} />}
        refreshing={isRefreshing}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={<View style={{ marginBottom: bottom }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
  },
});
