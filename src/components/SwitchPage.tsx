/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Switch,
    IconButton,
    Button,
    FormControlLabel,
    TextField,
    Table,
    TableCell,
    TableRow,
    TableBody
} from "@mui/material";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowSwitchPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            switch:
            {
                label: "switch",
                pos: {
                    x: 0,
                    y: 0
                }
            }
        }
    });
    const [myEvent, setMyEvent] = useState<number>(0);
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
        if (getValues().switch != undefined) {
            setCode(getComponentCode("switch", getValues().switch));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('switch');
            componentDetail[index] = getValues().switch;
            detail.setComponent('switch', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('switch');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('switch', componentDetail);
        changeState();
    }

      function setData() {
        if (getValues().switch != undefined) {
            setCode(getComponentCode("switch", getValues().switch));
        }
        setValue('switch', updateValue("switch", getValues().switch, detail)[index]);
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
                            name={`switch.label`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowSwitchPage);




