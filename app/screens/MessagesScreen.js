
import React, { useState } from 'react';
import { FlatList,StyleSheet,} from 'react-native';
import ListItem from '../components/lists/ListItem';

import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';



const initialMessages =[
    {
    id:1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/4.jpg')

},
{
    id:2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/4.jpg')

}
,]

function MessagesScreen(props) {

    const [messages , setMessges] = useState(initialMessages);
    const[refreshing, setRefresh] = useState(false);

    const handleDelete = message => {
        setMessges(messages.filter((m) => m.id !== message.id));
    }
    
    return (
        <Screen style={styles.screen}>
        <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => 
    (<ListItem 
    title={item.title}
    subTitle={item.description}
    image={item.image}
    onPress={() => console.log("massage select", item)}
    renderRightActions={ () => (
    <ListItemDeleteAction onPress={() => handleDelete(item)} />)}
    
    />
    )}
     ItemSeparatorComponent={ListItemSeparator}
     refreshing={refreshing}
     onRefresh={() => {
         setMessges([
            {
                id:2,
                title: 'T2',
                description: 'D2',
                image: require('../assets/4.jpg')
            
            }

         ]);

     }}
     
     />
    </Screen>
    );
}
const styles = StyleSheet.create({

    
});

export default MessagesScreen;