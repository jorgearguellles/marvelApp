import {Label, Text, Input} from "./styles";

function InputLabel(props){
  return(
    <Label htmlFor={props.for}>
      <Text>{props.TitleLable}</Text>
      {/* <Input placeholder={props.placeholder} id="correo" name="correo" type="email" autocomplete="email" /> */}
      <Input placeholder={props.placeholder} id={props.id} name={props.name} type={props.type} autocomplete={props.autocomplete} pattern={props.pattern}/>
    </Label>
  )
};

export default InputLabel;
