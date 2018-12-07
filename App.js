import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      resultText:"0",
      calculationText:"0",
      pointcounter:0,
      numberCounter:0,
   }
  }
 
  calculateResult(text){ /* finish  this part*/
  
  
   
  }
  
  buttononPress(text)
  {
    if(text == '=')
    {
      let prova=this.state.calculationText.split("")
      if(this.isoperator(prova[prova.length-1]));
      else{
        this.setState({
          resultText:prova[0]
        })
        return ""
      }
     return ""

    }
    if(text== ".")
    {
      let prova=this.state.calculationText.split("")
       if(this.state.calculationText == "")
        {
          return ""
        }
        else if(this.isoperator(prova[prova.length-1]) || prova[prova.length-1]=="." )
        {
          return ""
        }
        if(this.state.pointcounter!=0)
        {
          return ""
        }
        else this.setState({
          pointcounter:1
        })
    }
   this.setState({
     
     calculationText:this.state.calculationText+text
   })
  }
  
  isoperator(op)
  {
    if(op == "+" || op =="-" || op =="*" || op =="/" ) return true
  }
  operate(operation)
  {
    switch(operation){
      case 'DEL':
        if(this.state.calculationText =="") return 
        let text=this.state.calculationText.split('');
        text.pop();
        this.setState({
          calculationText:text.join('')
        })
        break
      case "+":
      case "-":
      case "*":
      case "/":
           if(this.state.calculationText=="") return "";
           if(this.isoperator(operation) && this.isoperator(this.state.calculationText.split("")[this.state.calculationText.length-1])) return "";
           this.setState({
            pointcounter:0,
            calculationText:this.state.calculationText+operation
        })
        break
      
    }
  }
  render() {
    let rowOper=[];
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],[0,'=',"."]];
    let oper=["DEL","+","/","-","*"];
    for(let i=0;i<nums.length;i++)
    {
      let row=[];
      for(let j=0;j<nums[i].length;j++)
      {
        row.push(<TouchableOpacity onPress={()=>this.buttononPress(nums[i][j])} style={styles.btn}><Text style={styles.buttonText}>{nums[i][j]}</Text></TouchableOpacity> );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    for(let i=0;i<oper.length;i++)
    {
      rowOper.push(<TouchableOpacity onPress={()=>this.operate(oper[i])} style={styles.btn}><Text style={styles.buttonTextOper}>{oper[i]}</Text></TouchableOpacity> );
    }

    return (
   <View style={styles.container}>
        <View style={styles.calculation}>
       <Text style={styles.calculationText}>{this.state.calculationText}</Text>
       </View>
        <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
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
    color:'white',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
   
   },
  result:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'

  },
  calculation:{
    flex:2,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  resultText:{
    fontSize:20,
    color:'black',
  },
  calculationText:{
    fontSize:20,
    color:'black',
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
    backgroundColor:'#434343',
    justifyContent:'space-around',
  },
  operations:{
    flex:1,
    backgroundColor:'#636363',
    justifyContent:'space-around',
    alignContent:'stretch',
  },
});
