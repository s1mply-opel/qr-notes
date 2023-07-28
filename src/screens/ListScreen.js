import React, { useState } from 'react';
import { Text, View, NativeBaseProvider} from 'native-base';
import QRCode from 'qrcode';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function ListScreen(){
    const [entriesList, setEntriesList] = useState([]);
    const [svgString, setSVGString] = useState('');

    const t = "This is owen";

    let a = 'test';

    QRCode.toString(t, (err, string) => {
        if(err) throw err;
        a = string;
        // console.log(string);
    });

    return(
        <NativeBaseProvider>
            <View>
                <Svg height="50%" width="50%" viewBox="0 0 100 100">
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="blue"
                        strokeWidth="2.5"
                        fill="green"
                    />
                    <Rect
                        x="15"
                        y="15"
                        width="70"
                        height="70"
                        stroke="red"
                        strokeWidth="2"
                        fill="yellow"
                    />
                </Svg>
            </View>
        </NativeBaseProvider>
    );
};
