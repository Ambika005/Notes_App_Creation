import { StyleSheet, View, Text, Pressable } from "react-native";

function NoteItem(props) {
    return (

        <View  style={styles.notesItem}>
          <Pressable 
            onPress={props.onDelete}
            // android_ripple={{color: '#210466'}}
            style={({pressed})=> pressed && styles.pressedItem}
          >
            <Text style={styles.notesText} >{props.text}</Text>
          </Pressable>
        </View> 


    )
}
const styles = StyleSheet.create({
  notesItem: {
    marginTop: 15,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  notesText: {
    color: 'white',
    margin: 8,
    padding: 3
  },
  pressedItem: {
     opacity: 0.5
  }
})
module.exports = NoteItem;