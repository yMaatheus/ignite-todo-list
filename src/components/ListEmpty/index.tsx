import { Text, View } from "react-native";

import IconEmpty from '../../assets/icon-empty.svg';

import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <IconEmpty
        width={56}
        height={56}
      />
      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}