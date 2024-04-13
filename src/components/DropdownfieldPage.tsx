/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
  Switch,
  Button,
  IconButton,
  FormControlLabel,
  TextField,
  Table,
  TableCell,
  TableRow,
  TableBody,
  MenuItem,
  Select,
  Tooltip
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';
import InfoIcon from '@mui/icons-material/Info';


const ShowDropdownPage = (props: any) => {
  const { changeState, index, drag } = props;
  const { control, getValues, setValue } = useForm({
    defaultValues: {
      dropdown:
      {
        size: "medium",
        width: "21.875rem",
        label: "Dropdown",
        required: false,
        data: "",
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

  useEffect(() => {
    setData();
  }, [index]);

  useEffect(() => {
    setData();
  }, [drag]);

  function test() {
    if (getValues().dropdown != undefined) {
      setCode(getComponentCode("dropdown", getValues().dropdown));
    }
    setCount(count + 1);
    setMyEvent(count);
    let componentDetail: any = detail.components('dropdown');
    componentDetail[index] = getValues().dropdown;
    detail.setComponent('dropdown', componentDetail);
  }

  function deleteComponent() {
    let componentDetail: any = detail.components('dropdown');
    componentDetail = componentDetail.filter((n: any, i: number) => i != index)
    detail.setComponent('dropdown', componentDetail);
    changeState();
  }

  function setData() {
    if (getValues().dropdown != undefined) {
      setCode(getComponentCode("dropdown", getValues().dropdown));
    }
    setValue('dropdown', updateValue("dropdown", getValues().dropdown, detail)[index]);
  }



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
              name={`dropdown.label`}
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
                  label="Data"
                  multiline
                  value={value}
                />
              )}
              name={`dropdown.data`}
              control={control}
            />
          </TableCell>
          <TableCell>
            <Tooltip title="Data should be seprated by comma(,)">
              <IconButton aria-label="info">
              <InfoIcon />
              </IconButton>
            </Tooltip>
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
                      checked={getValues().dropdown.required}
                      onChange={(e: any) => {
                        onChange(e);
                        test();
                      }}
                      value={value}
                    />
                  }
                  label={
                    getValues().dropdown.required ? "Required" : "Not Required"
                  }
                />
              )}
              name={`dropdown.required`}
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
              name={`dropdown.size`}
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
              name={`dropdown.width`}
              control={control}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

}


export default (ShowDropdownPage);




