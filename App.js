import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
  render() {
    let roper=[];
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],[0,"=","%"]];
    let oper=["+","/","-","*"];
    for(let i=0;i<4;i++)
    {
      let row=[];
      for(let j=0;j<3;j++)
      {
        row.push(<Button style={styles.btn} title={""+nums[i][j]}/>);
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    for(let i=0;i<4;i++)
    {
      roper.push(<Button style={StyleSheet.btn} title={""+oper[i]}/>);
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
       <Text style={styles.resultText}>2*2</Text>
       </View>
       <View style={styles.calculation}>
       <Text style={styles.calculationText}>222</Text>
       </View>
      <View style={styles.buttons}>
       <View styles={styles.numbers}>
           {rows}
      </View>
      <View styles={styles.operations}>
       {roper}
       </View>
      </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   },
   btn:{
    color:'black',
    flex:1,
    justifyContent:'space-around',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
   },
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent:'center',
    alignContent:'flex-end'

  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignContent:'flex-end',
  },
  resultText:{
    fontSize:20,
    color:'white',
  },
  calculationText:{
    fontSize:20,
    color:'white',
  },
  
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch',
    alignSelf:'center',
    
  },
   buttons:{
   flex:5,
   flexDirection:'row',
   justifyContent:'space-around',
  },
  numbers:{
    flex:8,
    backgroundColor:'red',
    justifyContent:'space-around',
  },
  operations:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'space-around',
    alignContent:'stretch',
  },
});
