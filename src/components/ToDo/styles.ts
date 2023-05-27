import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    backgroundColor: '#262626',

    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,

    padding: 12,

    marginBottom: 8,
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },
})