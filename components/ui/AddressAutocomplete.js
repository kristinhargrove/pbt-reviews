import AddressAutocomplete from "mui-address-autocomplete";

export default function MyAddressAutocomplete(props) {
  return (
    <AddressAutocomplete
      apiKey={props.apiKey}
      label={props.label}
      fields={props.fields} // fields will always contain address_components and formatted_address, no need to repeat them
      onChange={props.onChange}
    />
  );
}
