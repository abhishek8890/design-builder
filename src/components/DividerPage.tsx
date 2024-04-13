/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    TextField,
    Table,
    TableCell,
    TableRow,
    TableBody,
    Typography,
    Select,
    MenuItem 
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowDividerPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            divider:
            {
                height: "0.5rem",
                variant: "fullwidth",
                back: "black",
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
        if (getValues().divider != undefined) {
            setCode(getComponentCode("divider", getValues().divider));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('divider');
            componentDetail[index] = getValues().divider;
            detail.setComponent('divider', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('divider');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('divider', componentDetail);
        changeState();
    }

    function setData() {
        if (getValues().divider != undefined) {
            setCode(getComponentCode("divider", getValues().divider));
        }
        setValue('divider', updateValue("divider", getValues().divider, detail)[index]);
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
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    label="Height"
                                    value={value}
                                />
                            )}
                            name={`divider.height`}
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
                                    value={value}
                                >
                                    {["fullwidth", "middle"].map((option) => {
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
                            name={`divider.variant`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ "display": "flex" }}>
                        <Typography variant="h4" style={{ "marginRight": "1rem" }}>Color:</Typography>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <input type="color" value={value}
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }} />
                            )}
                            name={`divider.back`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowDividerPage);




