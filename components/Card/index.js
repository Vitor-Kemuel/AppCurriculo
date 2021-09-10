import React from "react";
import { Text, View } from 'react-native';

import styles from "./Style";

const Card = ({titulo, children}) =>{
    return(
        <View style={styles.card}>
        <View style={styles.card_header}>
          <Text style={styles.card_title}>{titulo}</Text>
        </View>
        <View style={styles.card_content}>
            {children}
        </View>
      </View>
    )
}

export default Card;