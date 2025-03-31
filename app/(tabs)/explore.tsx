import { employeeApi } from '@/libs/client/api/employee';
import { Header } from '@/libs/design/components';
import { useQuery } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
 
  // initialize the employees query when the screen is loaded
  const { data: employees } = useQuery({
    queryKey: ['employees'],
    queryFn: () => employeeApi.getEmployees('employees'),
  });

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
