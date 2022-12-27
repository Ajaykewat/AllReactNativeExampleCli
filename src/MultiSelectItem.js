import React, { Component, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
 
// const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
const fruits = [
  { label: 'Apples', value: 'appls' },
  { label: 'Oranges', value: 'orngs' },
  { label: 'Pears', value: 'pears' }
]

const MultiSelectItem = () => {

    const[selectedFrute,setSelectedFrute] = useState([])

 const  onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        setSelectedFrute( selectedFruits)
        console.log(selectedFruits)
      }

  return (
    <View>
        <SelectMultiple
          items={fruits}
          selectedItems={selectedFrute}
        //   maxSelect={1}
          onSelectionsChange={onSelectionsChange} />
      </View>
  )
}

export default MultiSelectItem

const styles = StyleSheet.create({})