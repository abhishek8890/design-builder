/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    TextField,
    Table,
    TableCell,
    TableRow,
    TableBody,
    MenuItem ,
    Select,
    IconButton,
    Tooltip
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';
import InfoIcon from '@mui/icons-material/Info';


const ShowButtonPage = (props: any) => {
    const { changeState, index, drag } = props;
    const buttonColor: string[] = ["primary", "secondary", "success", "error"];
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            button:
            {
                active: false,
                label: "Button",
                width: "",
                height: "",
                color: "primary",
                variant: "contained",
                iconLocation: "start",
                pos: {
                    x: 0,
                    y: 0
                },
                icon: undefined
            }
        }
    });
    const [myEvent, setMyEvent] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const detail = useContext(PageComponents);
    const [code, setCode] = useState<any>();

    useEffect(() => {
        setData();
    }, [drag]);

    useEffect(() => {
        setData();
    }, [index]);

    function test() {
        if (getValues().button != undefined) {
            setCode(getComponentCode("button", getValues().button));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('button');
            componentDetail[index] = getValues().button;
            detail.setComponent('button', componentDetail);
    }

    function setData()
    {
        if (getValues().button != undefined) {
            setCode(getComponentCode("button", getValues().button));
        }
        setValue('button', updateValue("button", getValues().button, detail)[index]);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('button');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('button', componentDetail);
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
                            name={`button.label`}
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
                            name={`button.width`}
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
                                    label="Height"
                                    value={value}
                                />
                            )}
                            name={`button.height`}
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
                                    label="Icon"
                                    value={value}
                                    style={{ width: "14rem" }}
                                />
                            )}
                            name={`button.icon`}
                            control={control}
                        />
                    </TableCell>
                    <TableCell>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    label="Place"
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    value={value}
                                >
                                    {["start", "end"].map((option) => {
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
                            name={`button.iconLocation`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    label="Color"
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    value={value}
                                >
                                    {buttonColor.map((option) => {
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
                            name={`button.color`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    label="Varient"
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    disabled={getValues().button.icon}
                                    value={value}
                                >
                                    {["contained", "text"].map((option) => {
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
                            name={`button.variant`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowButtonPage);




