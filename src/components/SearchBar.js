import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search" 
                style={styles.searchIcon}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    searchIcon: {
        fontSize: 24,
        alignSelf: 'center',
        marginHorizontal: 8,
    }
})

export default SearchBar 