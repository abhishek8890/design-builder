export default function getCode(value: any) {
  let code: any = '';
  const components = Object.keys(value.getComponent);

  components.map((arr) => {
    if (value.getComponent[arr].length != 0) {
      value.getComponent[arr].map((val: any) => {
        code = code + getComponentCode(arr, val);
      });
    }
  });
  console.log('Code', code);
  navigator.clipboard.writeText(code);
}

export function getComponentCode(tag: string, data: any) {
  let value: string = '';
  console.log('ff', data, tag);
  switch (tag) {
    case 'alert':
      value = `\n<Alert
    open={"objName"}
    alertType="${data.type}"
    text="${data.content}"
    variant=${data.variant == 'inline' ? `INLINE_VARIANT` : `PAGE_VARIANT`}
  />`;
      break;
    case 'button':
      value = `\n<div>
      <Button 
    variant="${data.variant}"
    color="${data.color}" ${
        data.icon
          ? `\n${
              data.iconLocation == 'start'
                ? `startIcon={<Icon name="${data.icon}"/>}`
                : `endIcon={<Icon name="${data.icon}"/>}`
            }`
          : ``
      } ${data.width && !data.height ? `\nstyle={{ width:"${data.width}"}}` : ``} ${
        !data.width && data.height ? `\nstyle={{ height:"${data.height}"}}` : ``
      } ${data.width && data.height ? `\nstyle={{ width:"${data.width}", height:"${data.height}"}}` : ``}
    >
    ${data.label}
    </Button>
    </div>`;
      break;
    case 'textField':
      value = `\n<div>
      <TextField 
      size="${data.size}" 
      label="${data.label}" ${data.width ? `\nstyle={{width: "${data.width}"}}` : ''}  ${
        data.required ? `\nrequired` : ''
      } ${data.multiline ? `\nmultiline` : ''}
      />
      </div>`;
      break;
    case 'checkbox':
      value = `\n<FormControlLabel
      control={<Checkbox />}
      label="${data.label}"
      />`;
      break;
    case 'datePicker':
      value = `<DatePicker
      label="${data.label}"
      placeholder="Select a date"
      size="${data.size}"
      required={${data.required}}
      />`;
      break;
    case 'divider':
      value = `<Divider 
      variant="${data.variant}"
      style={{ 
        backgroundColor: "${data.back}" 
        ${
          data.height
            ? `,height: "${data.height}"`
            : ``
        } }}/>`;
      break;
    case 'dropdown':
      value = `<Dropdown 
    label="${data.label}" 
    size="${data.size}" 
    required={${data.required}}> ${
        data.data
          ? `\n{[${data.data.split(',')}].map((option) => { 
      return ( <DropdownItem 
        key={option} 
        label={option} 
        value={option} 
        /> ); })}`
          : ``
      }
    </Dropdown>`;
      break;
    case 'icon': value = `<Icon 
    name="${data.name}" ${
        data.size
          ? `\nstyle={{
      width: "${data.size}",
      height: "${data.size}",
      color: "${data.color}" }}`
          : `\nstyle={{color: "${data.color}" }}`
      }
    />`;
      break;
    case 'searchField' : value = `<Search
    placeholder="Search" 
    label="${data.label}"/>`;
    break;
    case 'status' : value = `<div><StatusLabel 
    type="${data.type}" 
    text="${data.content}"/>
    </div>`;
    break;
    case 'switch': value = `<FormControlLabel 
    control={<Switch />} 
    label="${data.label}"/>`;
    break;
    case 'textLink' : value = `<Typography${data.size ? `\nvariant="${data.size}">` : ``}>
    <TextLink>${data.value}</TextLink>
    </Typography>`;
    break;
    case 'typography' : value = `<Typography${data.size ? `\nvariant="${data.size}"` : ``}${ data.color ? `\nstyle={{color: "${data.color}" }}` : ``}>
    ${data.value}
    </Typography>`
    break;
    default:
      console.log('None');
  }
  return value;
}
