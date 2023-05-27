import { useMemo, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import uuid from 'react-native-uuid';
import { ToDoSchema, Todo } from "../../types/ToDoType";
import { Form } from "../Form";
import { ListEmpty } from "../ListEmpty";
import { ToDo } from "../ToDo";
import { ToDosInfo } from "../ToDosInfo";

import { styles } from './styles';

export function ToDos() {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [toDoText, setToDoText] = useState('')

  const completed = useMemo(() => toDos.filter(todo => todo.hasDone).length, [toDos]);
  
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

  function handleDoneToDo(id: string) {
    setToDos(state => state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          hasDone: !todo.hasDone
        }
      }
      return todo;
    }));
  }

  function handleDeleteToDo(id: string) {
    setToDos(state => state.filter(todo => todo.id !== id));
  }

  return (
    <>
      <Form
        toDoText={toDoText}
        setToDoText={setToDoText}
        handleCreateNewTodo={handleCreateNewTodo}
      />

      <View style={styles.container}>
        <ToDosInfo created={toDos.length} completed={completed} />
        
        <FlatList
          data={toDos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ToDo
              key={item.id}
              todo={item}
              handleDeleteToDo={handleDeleteToDo}
              handleDoneToDo={handleDoneToDo}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    </>
  )
}