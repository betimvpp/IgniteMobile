import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center'
  },
})