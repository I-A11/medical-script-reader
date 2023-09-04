import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ref, set } from "firebase/database";
import { db } from "./component/config.jsx";

export default function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code || !name) {
      return;
    }
    set(ref(db, "users/" + code), {
      pharmacyCode: code,
      pharmacyName: name,
      // profile_picture: imageUrl,
    })
      .then(() => {
        //Data sent
        alert("Data sent ");
      })
      .catch((error) => {
        //There is an error
        alert(error);
      });

    //Set field empty
    setCode("");
    setName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Script Uploader</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Pharmacy Code"
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Pharmacy Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "10%",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    fontSize: 18,
    color: "#180ea9",
    borderWidth: 2,
    borderColor: "#aa9696",
    margin: 10,
    padding: 3,
  },
});
