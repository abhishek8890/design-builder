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

const ShowAlertPage = (props: any) => {
    const { changeState, index } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            alert: {
                content: "Content",
                severity: "success",
                pos: {
                    x: 0,
                    y: 0
                }
            }
        }
    });
    const alertType: string[] = ["success", "info", "warning", "error"];
    const [myEvent, setMyEvent] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const detail = useContext(PageComponents);
    const [code, setCode] = useState<any>();

    useEffect(() => {
        setData();
    }, [index])


    function test() {
        setCount(count + 1);
        if (getValues().alert != undefined) {
            setCode(getComponentCode("alert", getValues().alert));
        }
        setMyEvent(count);
            let componentDetail: any = detail.components('alert');
            componentDetail[index] = getValues().alert;
            detail.setComponent('alert', componentDetail);
    }

    function setData()
    {
        if (getValues().alert != undefined) {
            setCode(getComponentCode("alert", getValues().alert));
        }
        setValue('alert', updateValue("alert", getValues().alert, detail)[index]);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('alert');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('alert', componentDetail);
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
                                    multiline
                                    label="Content"
                                />
                            )}
                            name={`alert.content`}
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
                            name={`alert.severity`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}

export default (ShowAlertPage);




