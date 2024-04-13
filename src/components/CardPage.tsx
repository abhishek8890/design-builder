/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    TextField,
    Table,
    TableCell,
    TableRow,
    TableBody,
    Tooltip,
    IconButton
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PageComponents from '../pages/page-components';
import InfoIcon from '@mui/icons-material/Info';


const ShowCardPage = (props: any) => {
    const { changeState, index, drag } = props;
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            card:
            {
                content: "Content",
                component: "",
                header: "Title",
                height: "",
                width: "",
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
            const componentDetail: any = detail.components('card');
            setValue('card', componentDetail[index]);
    }, [index]);

    useEffect(() => {
            const componentDetail: any = detail.components('card');
            setValue('card', componentDetail[index]);
    }, [drag]);


    function test() {
        setCount(count + 1);
        setMyEvent(count);
            let componentDetail: any = detail.components('card');
            componentDetail[index] = getValues().card;
            detail.setComponent('card', componentDetail);
    }

    function deleteComponent() {
            let componentDetail: any = detail.components('card');
            componentDetail = componentDetail.filter((n: any, i: number) => i != index)
            detail.setComponent('card', componentDetail);
        changeState();
    }

    function generateCode() {
        const code: string = `<Card
        style={{
          height: "${getValues().card.height}",
          width: "${getValues().card.width}"
        }}
      >
        {getValues().card.header ? <CardHeader title={getValues().card.header} />
          : null}
        <CardContent>
        </CardContent>
        </Card>`
        // setCode(code)
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
                                    multiline
                                />
                            )}
                            name={`card.content`}
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
                                    label="Title"
                                />
                            )}
                            name={`card.header`}
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
                                    label="Component"
                                    multiline
                                />
                            )}
                            name={`card.component`}
                            control={control}
                        />
                    </TableCell>
                    <TableCell>
                        <Tooltip id="tooltip-icon" title="Row should be seprated by comma(,). To add component use(KW|component|label)">
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
                                    label="Height"
                                />
                            )}
                            name={`card.height`}
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
                                    label="Width"
                                />
                            )}
                            name={`card.width`}
                            control={control}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );

}


export default (ShowCardPage);




