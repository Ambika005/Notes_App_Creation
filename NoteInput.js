import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react"

function NoteInput(props) {
    const [notesText, setnotesText] = useState("")
    function notesInputHandler(text) {
        setnotesText(text)
    }

    function addnotesHandler() {
        props.onAddnotes(notesText)
        props.onClose();
    }
 //<Image source={require('./assets/nightsky.webp')}  style={styles.backgroundImage}/>
    return (
      <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.backgroundImage} source={require('./assets/nightsky.webp')} />
                <TextInput 
                onChangeText={notesInputHandler}
                style={styles.textInput} 
                placeholder='Type your notes here..'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="#f31282" title="Cancel" onPress={props.onClose} />
                    </View>
                    <View style={styles.button}>
                        <Button color="#5e0acc" onPress={addnotesHandler} title='Add Notes' />
                    </View>

                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 24,
        flex: 1,
        padding: 16,
        backgroundColor: '#1A0037'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#e4d0ff'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8  
    },
     backgroundImage:{
     width:320,
     height:480,
   }
})

module.exports = NoteInput;
 