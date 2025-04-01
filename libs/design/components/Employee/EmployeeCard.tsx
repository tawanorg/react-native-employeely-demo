
import { Employee } from "@/libs/types";
import { StyleSheet, Text, View } from "react-native";
import { useDesign } from "../../hooks/useDesign";
import { Avatar } from "../Avatar";
import { HapticTab } from "../ui/HapticTab";
import { getEmployeeType } from "./utils";

interface Props {
  employee: Employee;
  onPress: () => void;
  size?: 'small' | 'large';
}

export const EmployeeCard = ({ onPress, employee, size = 'small' }: Props) => {
const { colors, fonts } = useDesign();

  return (
    <View style={[styles.container, {
      backgroundColor: colors.card,
      shadowColor: colors.border,
    }]}>
      <HapticTab onPress={onPress} style={styles.employeeCard}>
        <View style={styles.avatarContainer}>
          <Avatar
            size="small"
            source={employee.photo_url_small ?? ''}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={[styles.name, fonts.bold, { color: colors.text }]}>{employee.full_name}</Text>
            <Text style={[styles.type, fonts.medium, { color: colors.text }]}>{getEmployeeType(employee.employee_type)}</Text>
          </View>
          <Text style={[styles.team, { color: colors.text }]}>{employee?.team ?? 'No team'}</Text>
        </View>
      </HapticTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  employeeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 4,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  type: {
    fontSize: 12,
  },
  team: {
    fontSize: 12,
  },
});
