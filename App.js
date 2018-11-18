import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      resultText:"",
    }
  }
  calculateResult(text){
    return "0"
  }
  buttononPress(text){
    if(text == '='){
        return this.state.resultText
    }
   this.setState({
     resultText:this.state.resultText+text
   })
  }
  render() {
    let rowOper=[];
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],[0,'=',"."]];
    let oper=["+","/","-","*"];
    for(let i=0;i<4;i++)
    {
      let row=[];
      for(let j=0;j<3;j++)
      {
        row.push(<TouchableOpacity onPress={()=>this.buttononPress(nums[i][j])} style={styles.btn}><Text style={styles.buttonText}>{nums[i][j]}</Text></TouchableOpacity> );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    for(let i=0;i<4;i++)
    {
      rowOper.push(<TouchableOpacity style={styles.btn}><Text style={styles.buttonTextOper}>{oper[i]}</Text></TouchableOpacity> );
    }

    return (
   <View style={styles.container}>
        <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
       </View>
       <View style={styles.calculation}>
       <Text style={styles.calculationText}>222</Text>
       </View>
      <View style={styles.buttons}>
         <View style={styles.numbers}>
          {rows}
         </View>
         <View style={styles.operations}>
          {rowOper}
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
   buttonText:{
   fontSize:30,
   },
   buttonTextOper:{
    color:'white',
    fontSize:30,
   },
   btn:{
    color:'black',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
   
   },
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'flex-end'

  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'flex-end',
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
    alignItems:'center',
   
    
  },
   buttons:{
   flex:7,
   flexDirection:'row',
   justifyContent:'space-around',
  },
  numbers:{
    flex:3,
    backgroundColor:'yellow',
    justifyContent:'space-around',
  },
  operations:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'space-around',
    alignContent:'stretch',
  },
});
