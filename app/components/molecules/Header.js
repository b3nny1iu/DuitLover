import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../../styles/Color'

const Header = () => {
    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 8}}>
                <Text>DuitLover</Text>
                <Text style={styles.textLogout}>Logout</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    textLogout: {
        textDecorationLine: 'underline',
        color: Color.secondary,
    }
})
