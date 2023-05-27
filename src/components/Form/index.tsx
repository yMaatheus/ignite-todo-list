import { TextInput, TouchableOpacity, View } from "react-native";
import Hug from '../../assets/hug.svg';

import { styles } from './styles';

export function Form() {
  return (
    <View
      style={styles.form}
    >
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
      />

      <TouchableOpacity
        style={styles.button}
      >
        <Hug
          width={52}
          height={52}
        />
      </TouchableOpacity>
    </View>
  )
}