import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  todoInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  createName: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,

    color: '#4EA8DE',
  },
  completedName: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,

    color: '#8284FA',
  },
  value: {
    width: 25,
    height: 19,
    borderRadius: 999,

    backgroundColor: '#333333',
    color: '#D9D9D9',

    textAlign: 'center',
    textAlignVertical: 'center',

    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  }
})