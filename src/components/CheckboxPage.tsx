/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    TextField,
    Table,
    TableCell,
    TableRow,
    TableBody
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowCheckboxPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            checkbox:
            {
                active: false,
                label: "CheckBox",
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
        if(getValues().checkbox != undefined)
        {
            setCode(getComponentCode("checkbox", getValues().checkbox));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('checkbox');
            componentDetail[index] = getValues().checkbox;
            detail.setComponent('checkbox', componentDetail);
    }

    function setData()
    {
        if (getValues().checkbox != undefined) {
            setCode(getComponentCode("checkbox", getValues().checkbox));
        }
        setValue('checkbox', updateValue("checkbox", getValues().checkbox, detail)[index]);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('checkbox');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('checkbox', componentDetail);
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
                                    required
                                    label="Label"
                                />
                            )}
                            name={`checkbox.label`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowCheckboxPage);




