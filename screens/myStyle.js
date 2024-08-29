import { StyleSheet } from "react-native";
export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  Wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
    fontWeight: "100",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    padding: 50,
    color: "red",
  },
  spacer: {
    height: "5%",
  },
  dataText: {
    fontSize: 20,
    fontWeight: "200",
    color: "black",
    textAlign: "center",
    // fontFamily: "Helvetica",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    // fontFamily: "Helvetica",
  },
  input: {
    height: 40,
    fontSize:20,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    color: "black",
    marginHorizontal:"20%",
    borderRadius: "15",
  },
  button: {
    width: "60%", // Make the button 60% of the screen width
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal:"20%"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
