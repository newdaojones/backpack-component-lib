import { StyleSheet } from "react-native";
import {colors } from './colors';

export const ContextButtonStyles = StyleSheet.create({
  contextButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: colors.background
  },
  contextButtonText: {
    color: colors.primary,
    fontSize: 18,
  },
});

export const GridStyles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '50%', // Adjust this value according to the desired width of the grid
  },
  gridItem: {
    width: '50%',
  },
});

export const CardStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  card: {
    width: 404,
    height: 224,
    backgroundColor: colors.background,
    borderColor: colors.background,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftSide: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: colors.background,
    borderColor: colors.primary,
    height: '100%',
    width: '50%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  rightSide: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.background,
    borderColor: colors.primary,
    height: '100%',
    width: '50%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  circleSide: {
    position: 'absolute',
    top: 0,
    left: '50%',
    backgroundColor: colors.background,
    borderColor: colors.primary,
    marginLeft: -94.5,
    height: 189,
    width: 189,
    borderRadius: 94.5,
    borderWidth: 5,
  },
  avatar: {
    height: 68,
    width: 68,
    borderRadius: 36,
    borderWidth: 2
  },
});
