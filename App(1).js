import { useState } from 'react';
import { StyleSheet, View, Text, TextInput,FlatList, Pressable, ImageBackground } from 'react-native';

export default function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddOrUpdateNote = () => {
    if (noteText.trim()) {
      if (editIndex != -1) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = noteText;
        setNotes(updatedNotes);
        setEditIndex(-1);
      } else {
        setNotes([...notes, noteText]);
      }
      setNoteText("");
    }
  };

  const handleEditNote = (index) => {
    setNoteText(notes[index]);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
  const updatedNotes = notes.filter((el, i) => i != index);
  setNotes(updatedNotes);
}

  return (
    <ImageBackground
      source={require('./assets/add.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Note-Taking App</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your note here...'
          value={noteText}            
          onChangeText={setNoteText} />
        <Pressable
          style={styles.addButton}
          onPress={handleAddOrUpdateNote}>
          <Text style={styles.addButtonText}>
            {editIndex != -1 ? "Update Note" : "Add Note"}
          </Text>
        </Pressable>
        <FlatList
          data={notes}
          renderItem={({ item, index }) => (
          <View style={styles.noteItem}>
            <Pressable onPress={() => handleEditNote(index)}>
              <Text style={styles.noteText}>{item}</Text>
            </Pressable>
            <Pressable onPress={() => handleDeleteNote(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </Pressable>
            </View>
        )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 8 
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)' 
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    elevation: 1
  },
  noteText: {
    fontSize: 20,
    flex: 1
  },
  deleteButton: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 16
  }
});