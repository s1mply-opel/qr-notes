import React, { useState } from 'react';
import { Text, View } from 'native-base';

export default function ListScreen(){
    const [entriesList, setEntriesList] = useState([]);
    
    return(
        <View>
            <Text>
                This is List Screen
            </Text>
        </View>
    );
};
