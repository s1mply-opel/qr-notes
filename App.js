import React from "react";
import { NativeBaseProvider, TextArea, Checkbox, Heading} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <TextArea placeholder="Text Area Placeholder"/>
      
      <Checkbox  value="checkbox">
        Hi
      </Checkbox>
      
      <Heading >Heading Text</Heading>
      

    </NativeBaseProvider>
  );
}