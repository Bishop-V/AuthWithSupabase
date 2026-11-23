import { StyleSheet } from "react-native";

const global = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#161616",
  },
  card: {
    borderWidth: 1,
    borderColor: "#393939",
    backgroundColor: "#242424",
    borderRadius: 8,
    padding: 16,
    gap: 4,
    margin: 20,
  },
  badge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "crimson",
  },
  label: { 
    fontSize: 16, 
    color: "#bebebe", 
    paddingVertical: 2,
  },
  value: { 
    fontSize: 18,
    color: "#B386C3",
    marginBottom: 6,
  },
  error: { 
    color: "crimson" 
  },
  main: {
    backgroundColor: "black",
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  sym: {
    color: "white",
  },
  input: {
    height: 40,
    width: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#B386C3",
    height: 40,
    margin: 12,
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  formBox: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "white",
    color: "white",
    padding: 10,
  },
  formBoxError: {
    borderColor: "crimson",
  },
  signUpButton: {
    backgroundColor: "#B386C3",
    padding: 10,
    borderRadius: 5,
    width: 100,
    marginTop: 8,
    alignItems: "center",
  },
  viewBox: { 
    flexDirection: "column", 
    gap: 20 
  },
  headerStyle: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#B386C3",
    fontWeight: "600",
    marginRight: 10,
  },
  link: {
    color: "white",
    paddingBottom: 3,
  },
});

export default global;
