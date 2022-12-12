import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [ searchApi, results, error ] = useResults()

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>

            {error ? <Text style={{color: 'red', marginLeft: 16, paddingVertical: 6}}>{error}</Text> : null}

            <ScrollView>
                <ResultsList 
                    style={styles.resultsContainer}
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}/>
                <ResultsList 
                    style={styles.resultsContainer}
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}/>
                <ResultsList 
                    style={styles.resultsContainer}
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    resultsContainer : {
        paddingTop: 16,
    },
})

export default SearchScreen