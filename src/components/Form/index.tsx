import { TextInput, TouchableOpacity, View } from "react-native";
import Hug from '../../assets/hug.svg';

import { styles } from './styles';

type Props = {
  toDoText: string;
  setToDoText: (text: string) => void;
  handleCreateNewTodo: () => void;
}

export function Form({ toDoText, setToDoText, handleCreateNewTodo }: Props) {
  return (
    <View
      style={styles.form}
    >
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        onChangeText={setToDoText}
        value={toDoText}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateNewTodo}
      >
        <Hug
          width={52}
          height={52}
        />
      </TouchableOpacity>
    </View>
  )
}