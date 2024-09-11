import React from "react"
import{AppBar, HStack, IconButton} from "@react-native-material/core"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

export default function CustomTintAppBar(){ 
  return (
    < AppBar 

      color="pink"
      tintColor="blue"
      title="Tela Pintada"
      subtitle ="Subtitulo"
      centerTitle = {true}
      leading = 
      {props=> <IconButton icon={
      props => <Icon name ="menu"{...props}/>
      }{...props}/>
      }
      
      trailing = 
      {props=> <IconButton icon={
      props => <Icon name ="menu"{...props}/>
      }{...props}/>
      }
  />
  );
}