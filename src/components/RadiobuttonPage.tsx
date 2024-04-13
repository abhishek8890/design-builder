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


const ShowRadiobuttonPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            radioButton:
            {
                label: "Radio",
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
            const componentDetail: any = detail.components('radioButton');
            setValue('radioButton', componentDetail[index]);
    }, [index]);

    useEffect(() => {
            const componentDetail: any = detail.components('radioButton');
            setValue('radioButton', componentDetail[index]);
    }, [drag]);

    function test() {
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('radioButton');
            componentDetail[index] = getValues().radioButton;
            detail.setComponent('radioButton', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('radioButton');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('radioButton', componentDetail);
        changeState();
    }
    // function setData() {
    //     if (getValues().radioButton != undefined) {
    //       setCode(getComponentCode("radioButton", getValues().radioButton));
    //     }
    //     setValue('radioButton', updateValue("radioButton", getValues().radioButton, space, detail, cardDetail)[index]);
    //   }

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
                            name={`radioButton.label`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowRadiobuttonPage);




