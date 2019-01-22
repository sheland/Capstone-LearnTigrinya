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
        ['ɐ', elementText('በ'),elementText('ደ'), elementText('ጁ'), elementText('ፉ'), elementText('ጉ'), elementText('ሃ')],
        ['u', elementText('ቡ'), elementText('ዱ'), elementText('ጂ'), elementText('ፊ'), elementText('ጊ'), elementText('ሄ')],
        ['i', elementText('ቢ'), elementText('ዳ'), elementText('ጃ'), elementText('ፋ'), elementText('ጋ'), elementText('ህ')],
        ['ä', elementText('ባ'), elementText('ዴ'), elementText('ጄ'), elementText('ፌ'), elementText('ጌ'), elementText('ሆ')],
        ['e', elementText('ቤ'), elementText('ድ'), elementText('ጅ'), elementText('ፍ'), elementText('ሁ'), elementText('ኀ')],
        ['ɨ', elementText('ብ'), elementText('ዶ'), elementText('ጆ'), elementText('ፎ'), elementText('ሀ'), elementText('ኁ')],
        ['o', elementText('ቦ'), elementText('ጀ'), elementText('ፈ'), elementText('ገ'), elementText('ሂ'), elementText('ኂ')],
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
      <Text style={styles.titleMain}>Alphabet Charts</Text>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper (column) */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={letterheaderdata.ipa} style={styles.title} heightArr={[30, 30, 30, 30, 30,30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30,30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper (row)*/}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData } heightArr={[40, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text}/>
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
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },
  titleMain: { textAlign: 'center', fontFamily: 'AmericanTypewriter-CondensedBold', fontWeight: 'bold', fontSize: 30, },


});
