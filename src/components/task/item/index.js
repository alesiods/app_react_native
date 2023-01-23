import React, { useState } from "react";
import {TouchableOpacity, Text, View} from "react-native"
import { styles } from "./styles";

const TaskItem = ({item, onHandlerModal}) => {

  const [datoGuardadoCheck, setDatoGuardadoCheck] = useState ("🚩")
  
  const cambioSegun = () =>{
    if(datoGuardadoCheck === "✅") {
      setDatoGuardadoCheck("❌")
    }else{
      setDatoGuardadoCheck("🚩")
    }if (datoGuardadoCheck == "🚩") {
      setDatoGuardadoCheck("✅")
    }
  }

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
          <TouchableOpacity onPress={()=>cambioSegun()}>
            <View style={styles.itemContainerDiv}>
            <Text style={styles.check}>{datoGuardadoCheck}</Text>
            <Text style={styles.itemList}>{item.value}</Text>
            </View>
          </TouchableOpacity>
    </TouchableOpacity>
    )
}

export default TaskItem