import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';



const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };

  const getcolor = (light, dark) => darkTheme ? dark : light;

  const calculate = (title ) => {
    if (title == 'C') {
      setResult('')
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  }

  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        height: 60,
        width: 60,
        margin: 16,
        backgroundColor: getcolor(colors.light, colors.dark)
      }}>
      <Text style={{
        fontSize: 33,
        // color:'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: getBtnColor(type)
      }}>
        {title}
      </Text>

    </TouchableOpacity>
  );
  const getBtnColor = (type) => {
    if (type == 'top') {
      return '#35FBD6'
    }
    else if (type == 'right') {

      return '#EB6363'
    } else {
      return getcolor(colors.dark, colors.light)
    }

  }


  return (
    <View style={{
      height: '100%',
      width: '100%',
      paddingVertical: 20,
      backgroundColor: getcolor(colors.light, colors.dark),
      alignItems: 'center'
    }}>
      <Switch value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getcolor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}>
      </Switch>
      <Text style={{
        fontSize: 40,
        color: getcolor(colors.dark, colors.light),
        textAlign: 'right',
        width: '100%',
        marginTop: 110,
        paddingRight: 20
      }}>{result}
      </Text>
      <View style={{
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',
        backgroundColor: getcolor(colors.light1, colors.dark1),
        borderTopRightRadius: 20, borderTopLeftRadius: 20
      }}>
        <Btn title="C" type='top' />
        <Btn title="DL" type='top' />
        <Btn title="/" type='top' />
        <Btn title="%" type='top' />
        <Btn title="7" type='number' />
        <Btn title="8" type='number' />
        <Btn title="9" type='number' />
        <Btn title="*" type='right' />
        <Btn title="4" type='number' />
        <Btn title="5" type='number' />
        <Btn title="6" type='number' />
        <Btn title="-" type='right' />
        <Btn title="1" type='number' />
        <Btn title="2" type='number' />
        <Btn title="3" type='number' />
        <Btn title="+" type='right' />
        <Btn title="00" type='number' />
        <Btn title="0" type='number' />
        <Btn title="." type='number' />
        <Btn title="=" type='right' />
      </View>
    </View>
  );

};


export default App;
