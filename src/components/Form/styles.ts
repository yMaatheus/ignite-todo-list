import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 130,
    position: 'absolute',
    flexDirection: 'row',
    gap: 6,
  },
  input: {
    width: 271,
    height: 54,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    padding: 16,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
})