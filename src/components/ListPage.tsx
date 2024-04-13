/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
  IconButton,
  Button,
  TextField,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Tooltip
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';


const ShowListPage = (props: any) => {
  const { changeState, index, drag } = props;
  const { control, getValues, setValue } = useForm({
    defaultValues: {
      list: {
        item: "",
        pos: {
          x: 0,
          y: 0
        },
        width: "",
        height: ""
      }
    }
  });
  const [myEvent, setMyEvent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const detail = useContext(PageComponents);
  const [code, setCode] = useState<any>();


  useEffect(() => {
      const componentDetail: any = detail.components('list');
      setValue('list', componentDetail[index]);
  }, [index]);

  useEffect(() => {
      const componentDetail: any = detail.components('list');
      setValue('list', componentDetail[index]);
  }, [drag]);


  function test() {
    setCount(count + 1);
    setMyEvent(count);
      let componentDetail: any = detail.components('list');
      componentDetail[index] = getValues().list;
      detail.setComponent('list', componentDetail);
  }

  function deleteComponent() {
      let componentDetail: any = detail.components('list');
      componentDetail = componentDetail.filter((n: any, i: number) => i != index)
      detail.setComponent('list', componentDetail);
    changeState();
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
                  multiline
                  required
                  label="Context"
                />
              )}
              name={`list.item`}
              control={control}
            />
          </TableCell>
          {/* <TableCell>
            <Tooltip id="tooltip-icon" title="Primary, Secondary, icon should be seprated by comma(,) respectively and use (/n) to add new row">
              <IconButton aria-label="info">
                <Icon name="info" />
              </IconButton>
            </Tooltip>
          </TableCell> */}
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
                  label="Width"
                />
              )}
              name={`list.width`}
              control={control}
            />
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
                  label="Height"
                />
              )}
              name={`list.height`}
              control={control}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

}


export default (ShowListPage);




