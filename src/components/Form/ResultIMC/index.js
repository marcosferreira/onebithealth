import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export default function ResultIMC(props) {
  return (
    <View style={styles.boxImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.result}>{props.resultImc}</Text>
    </View>
  );
}
