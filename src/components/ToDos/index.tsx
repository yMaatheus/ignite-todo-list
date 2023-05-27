import { Alert, FlatList, View } from "react-native";
import uuid from 'react-native-uuid';
import { ListEmpty } from "../ListEmpty";
import { ToDo } from "../ToDo";
import { ToDosInfo } from "../ToDosInfo";

import { useState } from "react";
import { ToDoSchema, Todo } from "../../types/ToDoType";
import { Form } from "../Form";
import { styles } from './styles';

export function ToDos() {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [toDoText, setToDoText] = useState('')

  function handleCreateNewTodo() {
    const newTodo = {
      id: uuid.v4() as string,
      text: toDoText,
      hasDone: false,
    }

    const { success } = ToDoSchema.safeParse(newTodo);
    if (!success) return Alert.alert('Erro', 'Não foi possível adicionar uma nova tarefa');

    setToDos(state => [...state, newTodo]);
    setToDoText('');
  }

  return (
    <>
      <Form toDoText={toDoText} setToDoText={setToDoText} handleCreateNewTodo={handleCreateNewTodo} />
      <View style={styles.container}>
        <ToDosInfo created={toDos.length} completed={0} />
        <FlatList
          data={toDos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ToDo key={item.id} todo={item} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    </>
  )
}