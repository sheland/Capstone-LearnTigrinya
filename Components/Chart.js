import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell, Row } from 'react-native-table-component';
import data from '../data/letters.json';
import allLetters from '../data/allletters.json';
import letterheaderdata from '../data/letterheaders.json';


export default class ExampleFive extends Component {
  constructor(props) {
    super(props);
    const elementText = (value) => (
      <TouchableOpacity
        onPress={() => this.handleCharacterSelect(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{value}</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      tableData: [
        ['ɐ', elementText('በ'),elementText('ደ'), elementText('ጀ'), elementText('ፈ'), elementText('ገ'), elementText('ሀ'), elementText('ኀ'), elementText('ሐ'), elementText('የ'), elementText('ከ'), elementText('ቀ'), elementText('ቐ'), elementText('ለ'), elementText('መ'), elementText('ነ'), elementText('ኘ'), elementText('ፐ'), elementText('ጰ'), elementText('ረ'), elementText('ሰ'), elementText('ሠ'), elementText('ጸ'), elementText('ፀ'), elementText('ሸ'), elementText('ተ'), elementText('ቸ'), elementText('ጨ'), elementText('ጠ'), elementText('ቨ'), elementText('ኸ'), elementText('ወ'), elementText('ዘ'), elementText('ዠ'), elementText('አ'), elementText('ዐ')],
        ['u', elementText('ቡ'), elementText('ዱ'), elementText('ጁ'), elementText('ፉ'), elementText('ጉ'), elementText('ሁ'), elementText('ኁ'), elementText('ሑ'), elementText('ዩ'), elementText('ኩ'), elementText('ቁ'), elementText('ቑ'), elementText('ሉ'), elementText('ሙ'), elementText('ኑ'), elementText('ኙ'), elementText('ፑ'), elementText('ጱ'), elementText('ሩ'), elementText('ሱ'), elementText('ሡ'), elementText('ጹ'), elementText('ፁ'), elementText('ሹ'), elementText('ቱ'), elementText('ቹ'), elementText('ጩ'), elementText('ጡ'), elementText('ቩ'), elementText('ኹ'), elementText('ዉ'), elementText('ዙ'), elementText('ዡ'), elementText('ኡ'), elementText('ዑ')],
        ['i', elementText('ቢ'), elementText('ዲ'), elementText('ጂ'), elementText('ፊ'), elementText('ጊ'), elementText('ሂ'), elementText('ኂ'), elementText('ሒ'), elementText('ዪ'), elementText('ኪ'), elementText('ቂ'), elementText('ቒ'), elementText('ሊ'), elementText('ሚ'), elementText('ኒ'), elementText('ኚ'), elementText('ፒ'), elementText('ጲ'), elementText('ሪ'), elementText('ሲ'), elementText('ሢ'), elementText('ጺ'), elementText('ፂ'), elementText('ሺ'), elementText('ቲ'), elementText('ቺ'), elementText('ጪ'), elementText('ጢ'), elementText('ቪ'), elementText('ኺ'), elementText('ዊ'), elementText('ዚ'), elementText('ዢ'), elementText('ኢ'), elementText('ዒ')],
        ['ä', elementText('ባ'), elementText('ዳ'), elementText('ጃ'), elementText('ፋ'), elementText('ጋ'), elementText('ሃ'), elementText('ኃ'), elementText('ሓ'), elementText('ያ'), elementText('ካ'), elementText('ቃ'), elementText('ቓ'), elementText('ላ'), elementText('ማ'), elementText('ና'), elementText('ኛ'), elementText('ፓ'), elementText('ጳ'), elementText('ራ'), elementText('ሳ'), elementText('ሣ'), elementText('ጻ'), elementText('ፃ'), elementText('ሻ'), elementText('ታ'), elementText('ቻ'), elementText('ጫ'), elementText('ጣ'), elementText('ቫ'), elementText('ኻ'), elementText('ዋ'), elementText('ዛ'), elementText('ዣ'), elementText('ኣ'), elementText('ዓ')],
        ['e', elementText('ቤ'), elementText('ዴ'), elementText('ጄ'), elementText('ፌ'), elementText('ጌ'), elementText('ሄ'), elementText('ኄ'), elementText('ሔ'), elementText('ዬ'), elementText('ኬ'), elementText('ቄ'), elementText('ቔ'), elementText('ሌ'), elementText('ሜ'), elementText('ኔ'), elementText('ኜ'), elementText('ፔ'), elementText('ጴ'), elementText('ሬ'), elementText('ሴ'), elementText('ሤ'), elementText('ጼ'), elementText('ፄ'), elementText('ሼ'), elementText('ቴ'), elementText('ቼ'), elementText('ጬ'), elementText('ጤ'), elementText('ቬ'), elementText('ቬ'), elementText('ዌ'), elementText('ዜ'), elementText('ዤ'), elementText('ኤ'), elementText('ዔ')],
        ['ɨ', elementText('ብ'), elementText('ድ'), elementText('ጅ'), elementText('ፍ'), elementText('ግ'), elementText('ህ'), elementText('ኅ'), elementText('ሕ'), elementText('ይ'), elementText('ክ'), elementText('ቅ'), elementText('ቕ'), elementText('ል'), elementText('ም'), elementText('ን'), elementText('ኝ'), elementText('ፕ'), elementText('ጵ'), elementText('ር'), elementText('ስ'), elementText('ሥ'), elementText('ጽ'), elementText('ፅ'), elementText('ሽ'), elementText('ት'), elementText('ች'), elementText('ጭ'), elementText('ጥ'), elementText('ቭ'), elementText('ኽ'), elementText('ው'), elementText('ዝ'), elementText('ዥ'), elementText('እ'), elementText('ዕ')],
        ['o', elementText('ቦ'), elementText('ዶ'), elementText('ጆ'), elementText('ፎ'), elementText('ጎ'), elementText('ሆ'), elementText('ኆ'), elementText('ሖ'), elementText('ዮ'), elementText('ኮ'), elementText('ቆ'), elementText('ቖ'), elementText('ሎ'), elementText('ሞ'), elementText('ኖ'), elementText('ኞ'), elementText('ፖ'), elementText('ጵ'), elementText('ሮ'), elementText('ሶ'), elementText('ሦ'), elementText('ጾ'), elementText('ፆ'), elementText('ሾ'), elementText('ቶ'), elementText('ቾ'), elementText('ጮ'), elementText('ጦ'), elementText('ቮ'), elementText('ኾ'), elementText('ዎ'), elementText('ዞ'), elementText('ዦ'), elementText('ኦ'), elementText('ዖ')],


      ]
    }
  }

  handleCharacterSelect(value) {
    const foundLetter = allLetters.find(letter => letter.letter === value);
    this.props.navigation.navigate('Details', { letterObject: foundLetter });
  }

  render() {
    const state = this.state;
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.titleMain}>Alphabet Chart</Text>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper (column) */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={letterheaderdata.ipa} style={styles.title} heightArr={[30, 30, 30, 30, 30,30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper (row)*/}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData } heightArr={[40, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa',  },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },
  titleMain: { textAlign: 'center', fontFamily: 'AmericanTypewriter-CondensedBold', fontWeight: 'bold', fontSize: 30, },


});
