import { Text, TouchableOpacity, View } from "react-native";
import IconCheck from '../../assets/icon-check.svg';
import IconChecked from '../../assets/icon-checked.svg';
import IconTrash from '../../assets/icon-trash.svg';

import { Todo } from "../../types/ToDoType";
import { styles } from './styles';

type Props = {
  todo: Todo;
}

export function ToDo({ todo: { text, hasDone } }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('oi check')}
      >
        {
          hasDone
            ? <IconChecked width={24} height={24} />
            : <IconCheck width={24} height={24} />
        }
      </TouchableOpacity>

      <Text style={styles.text}>
        {text}
      </Text>
      
      <TouchableOpacity
        onPress={() => console.log('oi')}
      >
        <IconTrash />
      </TouchableOpacity>
    </View>
  )
}