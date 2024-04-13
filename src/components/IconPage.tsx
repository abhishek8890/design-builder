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
    Link
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import { getComponentCode } from '../actions/GenerateReactCode';
import updateValue from '../actions/UpdateComponent';


const ShowIconPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            icon:
            {
                size: "",
                pos: {
                    x: 0,
                    y: 0
                },
                name: "save",
                color: "black"
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
        if (getValues().icon != undefined) {
            setCode(getComponentCode("icon", getValues().icon));
          }
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('icon');
            componentDetail[index] = getValues().icon;
            detail.setComponent('icon', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('icon');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('icon', componentDetail);
        changeState();
    }

    function setData() {
        if (getValues().icon != undefined) {
          setCode(getComponentCode("icon", getValues().icon));
        }
        setValue('icon', updateValue("icon", getValues().icon, detail)[index]);
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
                                    label="Name"
                                    required
                                    value={value}
                                />
                            )}
                            name={`icon.name`}
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
                                    label="Size"
                                    value={value}
                                />
                            )}
                            name={`icon.size`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{"display": "flex"}}>
                        <Typography variant="h4" style={{"marginRight":"1rem"}}>Color:</Typography>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <input type="color" value={value}
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }} />
                            )}
                            name={`icon.color`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
            <div style={{ marginLeft: "1rem" }}>
                <Link
                    href="https://mui.com/material-ui/material-icons/"
                >
                    Icon Lists
                </Link>
            </div>
        </Table>
    );

}


export default (ShowIconPage);




