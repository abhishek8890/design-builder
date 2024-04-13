/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
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


const ShowSnackbarPage = (props: any) => {
    const { changeState, index, drag } = props;
    const alertType: string[] = ["success", "info", "warning", "error"];
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            snack:
            {
                content: "Content",
                type: "success",
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
        if (getValues().snack != undefined) {
            setCode(getComponentCode("snack", getValues().snack));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('snack');
            componentDetail[index] = getValues().snack;
            detail.setComponent('snack', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('snack');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('snack', componentDetail);
        changeState();
    }
    function setData() {
        if (getValues().snack != undefined) {
            setCode(getComponentCode("snack", getValues().snack));
        }
        setValue('snack', updateValue("snack", getValues().snack, detail)[index]);
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
                                    label="Content"
                                />
                            )}
                            name={`snack.content`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    label="Type"
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    value={value}
                                >
                                    {alertType.map((option) => {
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
                            name={`snack.type`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowSnackbarPage);




