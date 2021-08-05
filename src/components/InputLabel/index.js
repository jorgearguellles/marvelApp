import {Label, Text, Input} from "./styles";

function InputLabel(props){
  return(
    <Label htmlFor={props.for}>
      <Text>{props.TitleLable}</Text>
      <Input placeholder={props.placeholder} id={props.id} name={props.name} type={props.type} autocomplete={props.autocomplete} pattern={props.pattern} required/>
    </Label>
  )
};

export default InputLabel;
