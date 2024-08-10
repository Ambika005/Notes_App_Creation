import { useState } from 'react';
import { StyleSheet,  View, Button,FlatList } from 'react-native';
import NoteItem from './NoteItem';
import NoteInput from './NoteInput'


export default function App() {

  const [notes, setNotes] = useState([]); 
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addnotesHandler(notesText) {
    setNotes((currentnotes) => [...currentnotes, notesText] )
  }

  function deleteItem(index) {
    const newnotes = notes.filter((el,i) => i!=index  )
    setNotes(newnotes);
  }

  function startAddnotesHandler() {
    setIsModalVisible(true);
  }

  function closenotesHandler() {
    setIsModalVisible(false);
  }

  return (
    <>  
      <View style={styles.appContainer} >   
        <Button title='Add New Note' color="#0099FF" onPress={startAddnotesHandler} />
          <NoteInput onClose={closenotesHandler} visible={isModalVisible} onAddnotes={addnotesHandler} />
          <View style={styles.notesContainer}>
            <FlatList 
              data={notes}
              renderItem={(itemData) => {
                  return <NoteItem text={itemData.item} onDelete={() => deleteItem(itemData.index)} />
                }
              }
            />
          </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#e5e4e4"
  },
  notesContainer: {
    flex: 4
  }
  
});