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
import InfoIcon from '@mui/icons-material/Info';


const ShowTablePage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            table: {
                header: "",
                body: "",
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
            const componentDetail: any = detail.components('table');
            setValue('table', componentDetail[index]);
    }, [index]);

    useEffect(() => {
            const componentDetail: any = detail.components('table');
            setValue('table', componentDetail[index]);
    }, [drag]);


    function test() {
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('table');
            componentDetail[index] = getValues().table;
            detail.setComponent('table', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('table');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('table', componentDetail);
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
                                    label="Header Data"
                                    multiline
                                />
                            )}
                            name={`table.header`}
                            control={control}
                        />
                    </TableCell>
                    <TableCell>
                        <Tooltip id="tooltip-icon" title="Header should be seprated by comma(,)">
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
                                <TextField
                                    value={value}
                                    onChange={(e: any) => {
                                        onChange(e);
                                        test();
                                    }}
                                    required
                                    multiline
                                    label="Body Data"
                                    minRows="4"
                                />
                            )}
                            name={`table.body`}
                            control={control}
                        />
                    </TableCell>
                    {/* <TableCell>
                        <Tooltip id="tooltip-icon" title="Body value should be seprated by comma(,) and use newline(/n) for new row. To add component use(KW|component|label)">
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
                            name={`table.width`}
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
                            name={`table.height`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowTablePage);




