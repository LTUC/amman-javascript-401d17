import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../store/reducers/listReducer';
import { Stack, HStack, VStack } from '@chakra-ui/react'

function List(props) {
  const list = useSelector(state => state.list)
  const dispatch = useDispatch();

  // console.log(dispatch)

  useEffect(() => {
    dispatch(get())
  }, []);

  return (
    <>
      <button onClick={() => dispatch(get())}>Get Data</button>
      <HStack className='list-item' bgColor='whatsapp.400' flexWrap='wrap' gap='50px' justifyContent='center'>
        {
          list.map(item =>
            <ListItem data={item} />
          )
        }
      </HStack>
    </>
  )
}

export default List