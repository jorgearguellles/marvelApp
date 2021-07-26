import {Label, Text, Input} from "./styles";

function InputLabel(props){
  return(
    <Label for={props.for}>
      <Text>{props.TitleLable}</Text>
      {/* <Input placeholder={props.placeholder} id="correo" name="correo" type="email" autocomplete="email" /> */}
      <Input placeholder={props.placeholder} id={props.id} name={props.name} type={props.type} autocomplete={props.autocomplete} />
    </Label>
  )
};

export default InputLabel;
