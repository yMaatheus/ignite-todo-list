import { Text, TouchableOpacity, View } from "react-native";
import IconCheck from '../../assets/icon-check.svg';
import IconChecked from '../../assets/icon-checked.svg';
import IconTrash from '../../assets/icon-trash.svg';

import { Todo } from "../../types/ToDoType";
import { styles } from './styles';

type Props = {
  todo: Todo;
  handleDeleteToDo: (id: string) => void;
  handleDoneToDo: (id: string) => void;
}

export function ToDo({ todo: { id, text, hasDone }, handleDeleteToDo, handleDoneToDo }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleDoneToDo(id)}
      >
        {
          hasDone
            ? <IconChecked width={24} height={24} />
            : <IconCheck width={24} height={24} />
        }
      </TouchableOpacity>

      <Text style={hasDone ? styles.textDone : styles.text}>
        {text}
      </Text>

      <TouchableOpacity
        onPress={() => handleDeleteToDo(id)}
      >
        <IconTrash />
      </TouchableOpacity>
    </View>
  )
}