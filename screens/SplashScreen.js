import { Text, View, StyleSheet, Image } from "react-native"
export default function SplashScren() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Images/Logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
  },
  logo: {
    marginTop: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
})
