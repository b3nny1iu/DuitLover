import React, { useState } from 'react'
import { Text, Button, TextInput, View, SafeAreaView, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const InsertInvestasiScreen = () => {
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);
    const [selectedType, setSelectedType] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.label}>Nama Investasi</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Masukan nama investasi"
                />
                <Text style={styles.label}>Jenis Investasi</Text>
                <Picker
                    selectedValue={selectedType}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedType(itemValue)
                    }>
                    <Picker.Item label="Saham" value="saham" />
                    <Picker.Item label="Reksadana" value="reksadana" />
                    <Picker.Item label="Logam Mulia" value="logammulia" />
                </Picker>
                <Text style={styles.label}>Jumlah Investasi</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Masukan jumlah investasi"
                    keyboardType="number-pad"
                />
                <Button
                    title="Simpan"
                    color="green"
                    //onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        marginHorizontal: 16,
    },
    txtInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    label: {
        //padding: 20,
        left: 10
    },
    btnStyle: {
        //height: 40,
        margin: 12,
        //borderWidth: 1,
        padding: 10,
    },
})


export default InsertInvestasiScreen