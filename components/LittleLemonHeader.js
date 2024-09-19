import { View, Text } from 'react-native'

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 37, // default 40
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  )
}
