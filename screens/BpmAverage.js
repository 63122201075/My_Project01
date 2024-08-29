import React, { useState } from "react";
import { View, Text, TextInput, Button, Keyboard } from "react-native";
import { myStyle } from "./myStyle";
import { db, ref, onValue, set } from "../firebase";


const BpmAverage = ({ navigation }) => {
  const [bpmValues, setBpmValues] = useState(Array(7).fill(""));
  const [average, setAverage] = useState(null);
  const [age, setAge] = useState("");

  const calculateAverage = () => {
    // Age
    if (age) {
        const ageRef = ref(db, "age"); // Reference to the 'age' key in the database
        set(ageRef, parseInt(age)); // Save the age to Firebase
        console.log("Age saved:", age);
      }
    // Average
    const total = bpmValues.reduce(
      (sum, value) => sum + parseFloat(value || 0),
      0
    );
    const avg = total / bpmValues.length;
    setAverage(avg);
    if (average) {
        const avgref = ref(db, "avg");
        set(avgref, parseInt(average));
        console.log("Average saved:", average.toFixed(2));
    }
    Keyboard.dismiss();
  };



  return (
    <View>
      {bpmValues.map((value, index) => (
        <TextInput
          key={index}
          style={myStyle.input}
          placeholder={`Enter BPM for day ${index + 1}`}
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => {
            const newValues = [...bpmValues];
            newValues[index] = text;
            setBpmValues(newValues);
          }}
        />
      ))}
       <TextInput
          style={myStyle.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
      <Text style={myStyle.spacer}></Text>
      <Button  title="Calculate" onPress={calculateAverage} />
      <Text style={myStyle.spacer}></Text>

      {average !== null && (
        <Text style={myStyle.dataText}>Average BPM: {average.toFixed(2)}</Text>
      )}
    </View>
  );
};

export default BpmAverage;
