import { Text, View } from "react-native";

import { styles } from './styles';

type Props = {
  created: number;
  completed: number;
}

export function ToDosInfo({ created, completed }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.todoInfoWrapper}>
        <Text style={styles.createName}>
          Criadas
        </Text>
        <Text style={styles.value}>
          {created}
        </Text>
      </View>

      <View style={styles.todoInfoWrapper}>
        <Text style={styles.completedName}>
          Concluidas
        </Text>
        <Text style={styles.value}>
          {completed}
        </Text>
      </View>
    </View>
  )
}