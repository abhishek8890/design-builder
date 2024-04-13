/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
  Switch,
  Button,
  FormControlLabel,
  TextField,
  Table,
  TableCell,
  TableRow,
  TableBody,
  MenuItem,
  Select
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowTextfieldPage = (props: any) => {
  const { changeState, index, drag } = props;
  const { control, getValues, setValue } = useForm({
    defaultValues: {
      textField:
      {
        label: "Text Field",
        width: "",
        required: false,
        multiline: false,
        size: "medium",
        pos: {
          x: 0,
          y: 0
        }
      }
    }
  });
  const [myEvent, setMyEvent] = useState<number>(0);
  const textSizeList: string[] = ["medium", "small"];
  const [count, setCount] = useState<number>(0);
  const detail = useContext(PageComponents);
  const [code, setCode] = useState<any>();
  console.log("here")

  useEffect(() => {
    setData();
  }, [index]);

  useEffect(() => {
    setData();
  }, [drag]);

  function test() {
    setCount(count + 1);
    if (getValues().textField != undefined) {
      setCode(getComponentCode("textField", getValues().textField));
    }
    setMyEvent(count);
      let componentDetail: any = detail.components('textField');
      componentDetail[index] = getValues().textField;
      detail.setComponent('textField', componentDetail);
  }

  function setData()
    {
        if (getValues().textField != undefined) {
            setCode(getComponentCode("textField", getValues().textField));
        }
        setValue('textField', updateValue("textField", getValues().textField, detail)[index]);
    }

  function deleteComponent() {
      let componentDetail: any = detail.components('textField');
      componentDetail = componentDetail.filter((n: any, i: number) => i != index)
      detail.setComponent('textField', componentDetail);
    
    changeState();
  }

  const handleCopy = (e: any) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
  };


  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Button variant="text" color="secondary" onClick={() => {
              deleteComponent();
            }}>
              Remove
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Controller
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  onChange={(e: any) => {
                    onChange(e);
                    test();
                  }}
                  required
                  label="Label"
                />
              )}
              name={`textField.label`}
              control={control}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Controller
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Switch
                      id={`Controlled`}
                      checked={getValues().textField.required}
                      onChange={(e: any) => {
                        onChange(e);
                        test();
                      }}
                      value={value}
                    />
                  }
                  label={
                    getValues().textField.required ? "Required" : "Not Required"
                  }
                />
              )}
              name={`textField.required`}
              control={control}
            />
            <Controller
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Switch
                      id={`Controlled`}
                      checked={getValues().textField.multiline}
                      onChange={(e: any) => {
                        onChange(e);
                        test();
                      }}
                      value={value}
                    />
                  }
                  label={
                    getValues().textField.multiline ? "Multiline" : "Not Multiline"
                  }
                />
              )}
              name={`textField.multiline`}
              control={control}
            />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Controller
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={(e: any) => {
                    onChange(e);
                    test();
                  }}
                  label="Width"
                  value={value}
                />
              )}
              name={`textField.width`}
              control={control}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Controller
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Size"
                  onChange={(e: any) => {
                    onChange(e);
                    test();
                  }}
                  value={value}
                >
                  {textSizeList.map((option) => {
                    return (
                      <MenuItem 
                        key={option}
                        value={option}
                      >
                        {option}
                        </MenuItem>
                    );
                  })}
                </Select>
              )}
              name={`textField.size`}
              control={control}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

}


export default (ShowTextfieldPage);




