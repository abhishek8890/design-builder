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
    Select,
    Typography
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowTextPage = (props: any) => {
    const { changeState, index, drag } = props;
    const variantList: string[] = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "body1",
        "body2",
        "body3",
        "caption"
    ];
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            typography:
            {
                size: "",
                color: "",
                pos: {
                    x: 0,
                    y: 0
                },
                value: "Text"
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
        if (getValues().typography != undefined) {
            setCode(getComponentCode("typography", getValues().typography));
        }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('typography');
            componentDetail[index] = getValues().typography;
            detail.setComponent('typography', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('typography');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('typography', componentDetail);
        changeState();
    }

    function setData() {
        if (getValues().typography != undefined) {
            setCode(getComponentCode("typography", getValues().typography));
        }
        setValue('typography', updateValue("typography", getValues().typography, detail)[index]);
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
                                    label="Value"
                                />
                            )}
                            name={`typography.value`}
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
                            name={`typography.color`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    label="Variant"
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    value={value}
                                >
                                    {variantList.map((option) => {
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
                            name={`typography.size`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowTextPage);




