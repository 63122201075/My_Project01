import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { db, ref, onValue, set } from "../firebase";
import { myStyle } from "./myStyle";

const Display = ({ navigation }) => {
  const [pulse, setPulse] = useState(0);
  const [ledOn, setLedOn] = useState(false);

  useEffect(() => {
    // Fetch pulse data from Firebase
    const dataRef = ref(db);
    onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      if (val && val.pulse !== undefined) {
        setPulse(Math.round(val.pulse));
      } else {
        setPulse("No data");
        console.error("No pulse data found in snapshot", val);
      }
    });

    // Fetch initial LED state from Firebase
    const ledStateRef = ref(db, "ledState");
    onValue(ledStateRef, (snapshot) => {
      const ledState = snapshot.val();
      setLedOn(ledState);
      console.log("LED state fetched from Firebase:", ledState);
    });


  }, []);

  const toggleLED = () => {
    const newLEDState = !ledOn;
    setLedOn(newLEDState);

    // Update the LED state in Firebase
    set(ref(db, "ledState"), newLEDState)
      .then(() => {
        console.log("LED state updated in Firebase:", newLEDState);
      })
      .catch((error) => {
        console.error("Error updating LED state:", error);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/b1.jpg")}
      style={myStyle.container}
    >
      <View style={myStyle.Wrapper}>
        <Text style={myStyle.text}>{pulse}</Text>
        <Text style={myStyle.dataText}>bpm</Text>
        <Text style={{ height: "10%" }}></Text>
        <TouchableOpacity
          style={[
            myStyle.button,
            {
              backgroundColor: ledOn
                ? "rgb(255, 102, 102)" // Red for LED On
                : "rgb(102, 255, 153)", // Green for LED Off
            },
          ]}
          onPress={toggleLED}
        >
          <Text style={myStyle.buttonText}>
            {ledOn ? "Turn LED Off" : "Turn LED On"}
          </Text>
        </TouchableOpacity>
        <Text style={myStyle.spacer}></Text>
        <Button
          title="Calculate 7-Day Avg BPM"
          onPress={() => navigation.navigate("BpmAverage")}
        />
      </View>
    </ImageBackground>
  );
};

export default Display;
