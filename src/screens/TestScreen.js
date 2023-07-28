import React, {useState} from 'react';
import { Alert, Modal, Text, Pressable, View, StyleSheet} from 'react-native';

export default function TestScreen(props) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Modal
                visible={true}>
                <View>
                    <Text>Nasgor</Text>
                </View>
            </Modal>
            <Pressable
                style={[{borderRadius: 20, padding: 10, elevation: 2,}]}>
                <Text>Show modal</Text>
            </Pressable>
        </View>
    );
};
