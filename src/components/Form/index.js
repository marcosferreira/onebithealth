import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function imcValidation() {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é igual:');
      setTextButton('Calcular novamente');
      return;
    }

    setImc(null);
    setTextButton('Calcular');
    setMessageImc('Preencha o peso e altura');
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput style={styles.formInput} placeholder='Ex. 1.72' keyboardType='numeric' onChangeText={setHeight} value={height} />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.formInput} placeholder='Ex. 80.240' keyboardType='numeric' onChangeText={setWeight} value={weight} />

        <TouchableOpacity style={styles.formButton} onPress={imcValidation}>
          <Text style={styles.formTextButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
      <View>
        <Text style={{ color: '#999', textAlign: 'justify', paddingHorizontal: 20, }}>
          Para a maioria dos adultos, um IMC ideal está na faixa de 18,6 a 24,9. Portanto o peso ideal é uma variável bastante ampla do calculo IMC. Para
          crianças e jovens de 2 a 18 anos, a calculadora de IMC não deve ser utilizada. Isso se deve ao fato de que o cálculo IMC leva em consideração idade e
          sexo além da altura e peso.
        </Text>
      </View>
    </View>
  );
}
