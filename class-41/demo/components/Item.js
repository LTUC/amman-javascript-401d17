import { Text } from 'react-native'

export default function Item(props) {
  // console.log(props)
  return (
    <Text key={props.item} onPress={() => props.onDelete(props.item)} >{props.item}</Text>
  )
}
