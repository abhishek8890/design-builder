/* eslint-disable react/jsx-no-literals */
import {
  Typography,
  TextField,
  Button,
  Alert,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Divider,
  Switch,
  Snackbar,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Drawer,
  Box,
  Toolbar,
  IconButton,
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  Select,
  Link,
  InputLabel,
  FormControl
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useContext } from "react";
import parse from 'html-react-parser';
import getCode from "../actions/GenerateReactCode";
import PageComponents from "../pages/page-components";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import ShowTextfieldPage from "../components/textfieldPage";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ShowAlertPage from "../components/AlertPage";
import ShowCardPage from "../components/CardPage";
import ShowListPage from "../components/ListPage";
import ShowTablePage from "../components/TablePage";
import ShowDropdownPage from "../components/DropdownfieldPage";
import ShowRadiobuttonPage from "../components/RadiobuttonPage";
import ShowButtonPage from "../components/Buttonpage";
import ShowIconPage from "../components/IconPage";
import ShowCheckboxPage from "../components/CheckboxPage";
import ShowDividerPage from "../components/DividerPage";
import ShowSwitchPage from "../components/SwitchPage";
import ShowSnackbarPage from "../components/SnackbarPage";
import ShowTextPage from "../components/TextPage";
import Icon from '@mui/material/Icon';

const styles = () => ({
  root: {
    backgroundColor: `#e2e2e2`,
    height: "100%"
  },
  card: {
    height: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  sidebar: {
    height: "21.875rem",
    width: "26rem"
  },
  header: {
    marginTop: "-1.5rem",
    height: "3.75rem",
    padding: "1rem 0rem 1rem 0rem"
  },
  cardName: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    display: "flex"
  },
  cardIcon: {
    marginLeft: "1rem",
    marginTop: "0.7rem"
  },
  data: {
    backgroundColor: "red",
    height: "22.875rem",
    overflow: "auto"
  },
  sidebarContent: {
    height: "18.125rem",
    width: "26rem",
    marginTop: "-1.5rem",
    marginLeft: "-1.4rem",
    overflow: "hidden",
    borderTop: "0.1rem solid black"
  },
  rowDesign: {
    display: "flex",
    marginTop: "1rem"
  },
  deleteButton: {
    marginLeft: "1rem",
    marginTop: "1rem"
  },
  masterDesign: {
    height: "30rem"
  }
});

function PageDesign(props: any) {
  const { classes } = props;
  const history = useNavigate();
  const stringOptions: string[] = ["Value one", "Value two", "Value three", "Value four"];
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [pageName, setPageName] = useState<string>("Page Name");
  const [myEvent, setMyEvent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [designExist, setDesignExist] = useState<boolean>(false);
  const fileDownload = require("js-file-download");
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const pageComponentsDetail = useContext(PageComponents);
  const [showData, setShowData] = useState<any>();
  const [showComponentData, setShowComponentData] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = React.useState('');

  // setPageToolbar({
  //   primaryCommands: [
  //     {
  //       icon: "align-center",
  //       label: "Align Design",
  //       callback: () => history.replace("/alignPage")
  //     },
  //     {
  //       icon: "requirements",
  //       label: "Components",
  //       callback: () => setShowComponent(true)
  //     },
  //     {
  //       icon: "code",
  //       label: "Get Code",
  //       callback: () => createCode()
  //   },
  //     {
  //       icon: "save",
  //       label: "Save",
  //       callback: () => saveDesign()
  //     },
  //     {
  //       icon: "file-import",
  //       label: "Import",
  //       callback: () => handleClickOpen()
  //     }
  //   ]
  // });

  function createCode() {
    getCode(pageComponentsDetail);
  }

  function handleChange(event: any) {
    switch (event.target.name) {
      case "pagename":
        setPageName(event.target.value);
        break;
      default:
        console.log("Yes");
    }
    test();
  }
  // Snackbar closing Function
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  function handleDropChange(event: any) {
    setDropdownValue(event.target.value);
  };


  function sectionOne() {
    return (
      <div>
        <div style={{ position: "relative" }} id="alert">
          {pageComponentsDetail.alertArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("alert", index)}>
                <Alert
                  severity={pageComponentsDetail.alertArray[index].severity}
                >
                  {pageComponentsDetail.alertArray[index].content}
                </Alert>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="card">
          {pageComponentsDetail.cardArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("card", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "card");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.cardArray[index].pos.x,
                    y: pageComponentsDetail.cardArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <Card
                      style={{
                        height: pageComponentsDetail.cardArray[index].height,
                        width: pageComponentsDetail.cardArray[index].width,
                        overflow: "auto"
                      }}
                    >
                      {pageComponentsDetail.cardArray[index].header ? <CardHeader title={pageComponentsDetail.cardArray[index].header} />
                        : null}
                      <CardContent>
                        <Typography>
                          {parse(pageComponentsDetail.cardArray[index].content)}
                        </Typography>
                        <div>
                          {pageComponentsDetail.cardArray[index].component.split(",")
                            .map((arr: any) => {
                              return (
                                <div key={arr.id}>
                                  {arr}
                                </div>
                              );
                            })
                          }
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="dropdown">
          {pageComponentsDetail.dropdownfieldArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("dropdown", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "dropdown");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.dropdownfieldArray[index].pos.x,
                    y: pageComponentsDetail.dropdownfieldArray[index].pos.y
                  }}
                >
                  <div
                    style={{
                      width: pageComponentsDetail.dropdownfieldArray[index].width,
                      position: "absolute"
                    }}
                  >
                    <FormControl sx={{ m: 1, minWidth: pageComponentsDetail.dropdownfieldArray[index].width }}>
                      <InputLabel >{pageComponentsDetail.dropdownfieldArray[index].label}</InputLabel>
                      <Select
                        label={pageComponentsDetail.dropdownfieldArray[index].label}
                        size={pageComponentsDetail.dropdownfieldArray[index].size}
                        required={pageComponentsDetail.dropdownfieldArray[index].required}
                        value={dropdownValue}
                        onChange={handleDropChange}
                        autoWidth
                      >
                        {pageComponentsDetail.dropdownfieldArray[index].data.split(",").map((option: any) => {
                          return (
                            <MenuItem
                              key={option}
                            >
                              {option}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="list">
          {pageComponentsDetail.listArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("list", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "list");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.listArray[index].pos.x,
                    y: pageComponentsDetail.listArray[index].pos.y
                  }}
                >
                  <div style={{ width: pageComponentsDetail.listArray[index].width, height: pageComponentsDetail.listArray[index].height, position: "absolute", overflow: "auto" }}>
                    <List
                    >
                      {pageComponentsDetail.listArray[index].item.split("/n")
                        .map((n: any) => {
                          return (
                            <div key={n.id}>
                              <ListItem>
                                {n.split(",")[2] ? <ListItemIcon>
                                  {n.split(",")[2]}
                                </ListItemIcon> : null
                                }
                                <ListItemText primary={n.split(",")[0]}
                                  secondary={n.split(",")[1]} />
                              </ListItem>
                              <Divider component="li" />
                            </div>
                          );
                        })
                      }
                    </List>
                  </div>
                </Draggable>
              </div>)
          })}
        </div>
        <div style={{ position: "relative" }} id="table">
          {pageComponentsDetail.tableArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("table", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "table");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.tableArray[index].pos.x,
                    y: pageComponentsDetail.tableArray[index].pos.y
                  }}
                >
                  <div style={{ width: pageComponentsDetail.tableArray[index].width, height: pageComponentsDetail.tableArray[index].height, position: "absolute", overflow: "auto" }}>
                    <Table
                    >
                      <TableHead>
                        <TableRow>
                          {pageComponentsDetail.tableArray[index].header.split(",")
                            .map((arr: any) => {
                              return (
                                <TableCell key={arr.id}>
                                  <Typography variant="h3">{arr}</Typography>
                                </TableCell>
                              );
                            })
                          }
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pageComponentsDetail.tableArray[index].body.split("/n")
                          .map((n: any) => {
                            return (
                              <TableRow key={n.id}>
                                {n.split(",").map((val: any) => {
                                  return <TableCell key={val.id}>{tableElements(val)}</TableCell>;
                                })}
                              </TableRow>
                            );
                          })
                        }
                      </TableBody>
                    </Table>
                  </div>
                </Draggable>
              </div>)
          })}
        </div>
        <div style={{ position: "relative" }} id="textField">
          {pageComponentsDetail.textfieldArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("textField", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "textField");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.textfieldArray[index].pos.x,
                    y: pageComponentsDetail.textfieldArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <TextField
                      size={pageComponentsDetail.textfieldArray[index].size}
                      label={pageComponentsDetail.textfieldArray[index].label}
                      style={{
                        width: pageComponentsDetail.textfieldArray[index].width
                      }}
                      required={pageComponentsDetail.textfieldArray[index].required}
                      multiline={pageComponentsDetail.textfieldArray[index].multiline}
                    />
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <RadioGroup name="Radio Button" style={{ position: "relative" }}>
          {pageComponentsDetail.radiobuttonArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("radioButton", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "radioButton");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.radiobuttonArray[index].pos.x,
                    y: pageComponentsDetail.radiobuttonArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <FormControlLabel
                      value={`${index}`}
                      control={<Radio />}
                      label={pageComponentsDetail.radiobuttonArray[index].label}
                    />
                  </div>
                </Draggable>
              </div>
            );
          })}
        </RadioGroup>
        <div style={{ position: "relative" }} id="button">
          {pageComponentsDetail.buttonArray.map((item, index) => {
            return (
              <div key={item.id}>
                {!pageComponentsDetail.buttonArray[index].icon ? (
                  <Draggable
                    onStop={(e, data) => {
                      trackPos(data, index, "button");
                      test();
                    }}
                    defaultPosition={{
                      x: pageComponentsDetail.buttonArray[index].pos.x,
                      y: pageComponentsDetail.buttonArray[index].pos.y
                    }}
                  >
                    <div style={{ position: "absolute" }} onClick={() => selectedComponent("button", index)} >
                      <Button
                        style={{
                          width: pageComponentsDetail.buttonArray[index].width,
                          height: pageComponentsDetail.buttonArray[index].height
                        }}
                        variant={pageComponentsDetail.buttonArray[index].variant}
                        color={pageComponentsDetail.buttonArray[index].color}
                      >
                        {pageComponentsDetail.buttonArray[index].label}
                      </Button>
                    </div>
                  </Draggable>
                ) : null}
                {pageComponentsDetail.buttonArray[index].icon ? (
                  <Draggable
                    onStop={(e, data) => trackPos(data, index, "button")}
                    defaultPosition={{
                      x: pageComponentsDetail.buttonArray[index].pos.x,
                      y: pageComponentsDetail.buttonArray[index].pos.y
                    }}
                  >
                    <div onClick={() => selectedComponent("button", index)} style={{ position: "absolute" }}>
                      {pageComponentsDetail.buttonArray[index].iconLocation == "start" ? <Button
                        style={{
                          width: pageComponentsDetail.buttonArray[index].width,
                          height: pageComponentsDetail.buttonArray[index].height
                        }}
                        color={pageComponentsDetail.buttonArray[index].color}
                      // startIcon={
                      //   <Icon name={pageComponentsDetail.buttonArray[index].icon} />
                      // }
                      >
                        {pageComponentsDetail.buttonArray[index].label}
                      </Button> : <Button
                        style={{
                          width: pageComponentsDetail.buttonArray[index].width,
                          height: pageComponentsDetail.buttonArray[index].height
                        }}
                        color={pageComponentsDetail.buttonArray[index].color}
                      // endIcon={
                      //   <Icon name={pageComponentsDetail.buttonArray[index].icon} />
                      // }
                      >
                        {pageComponentsDetail.buttonArray[index].label}
                      </Button>}
                    </div>
                  </Draggable>
                ) : null}
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="icon">
          {pageComponentsDetail.iconArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("icon", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "icon");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.iconArray[index].pos.x,
                    y: pageComponentsDetail.iconArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <Icon>{pageComponentsDetail.iconArray[index].name}</Icon>
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="checkbox">
          {pageComponentsDetail.checkboxArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("checkbox", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "checkbox");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.checkboxArray[index].pos.x,
                    y: pageComponentsDetail.checkboxArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <FormControlLabel
                      value={`${index}`}
                      control={<Checkbox />}
                      label={pageComponentsDetail.checkboxArray[index].label}
                    />
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="divider">
          {pageComponentsDetail.dividerArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("divider", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "divider");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.dividerArray[index].pos.x,
                    y: pageComponentsDetail.dividerArray[index].pos.y
                  }}
                >
                  <Divider
                    variant={pageComponentsDetail.dividerArray[index].variant}
                    style={{ backgroundColor: pageComponentsDetail.dividerArray[index].back, height: pageComponentsDetail.dividerArray[index].height }}
                  />
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="switch">
          {pageComponentsDetail.switchArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("switch", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "switch");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.switchArray[index].pos.x,
                    y: pageComponentsDetail.switchArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <FormControlLabel
                      control={<Switch />}
                      label={pageComponentsDetail.switchArray[index].label}
                    />
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="snackbar">
          {pageComponentsDetail.snackbarArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("snack", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "snack");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.snackbarArray[index].pos.x,
                    y: pageComponentsDetail.snackbarArray[index].pos.y
                  }}
                >
                  <Snackbar
                    open={true}
                    // variant={pageComponentsDetail.snackbarArray[index].type}
                    message={pageComponentsDetail.snackbarArray[index].content}
                  />
                </Draggable>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative" }} id="text">
          {pageComponentsDetail.typographyArray.map((item, index) => {
            return (
              <div key={item.id} onClick={() => selectedComponent("typography", index)}>
                <Draggable
                  onStop={(e, data) => {
                    trackPos(data, index, "typography");
                    test();
                  }}
                  defaultPosition={{
                    x: pageComponentsDetail.typographyArray[index].pos.x,
                    y: pageComponentsDetail.typographyArray[index].pos.y
                  }}
                >
                  <div style={{ position: "absolute" }}>
                    <Typography variant={pageComponentsDetail.typographyArray[index].size} style={{ color: pageComponentsDetail.typographyArray[index].color }}>
                      {pageComponentsDetail.typographyArray[index].value}
                    </Typography>
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function tableElements(data: string) {
    const element = data.split("|");
    let value;
    if (element[0] === "KW") {
      switch (element[1]) {
        case "textfield": value = (<TextField label={element[2]} style={{
          width: element[3]
        }} />);
          break;
        case "checkbox": value = (<FormControlLabel
          control={<Checkbox />}
          label={element[2]}
        />);
          break;
        case "radiobutton": value = (<FormControlLabel
          control={<Radio />}
          label={element[2]}
        />);
          break;
        case "switch": value = (<FormControlLabel
          control={<Switch />}
          label={element[2]}
        />);
          break;
          break;
        case "typography": value = <Typography variant={"body2"}>{element[2]}</Typography>;
          break;
        case "textlink": value = <Typography variant={"body2"}><Link>{element[2]}</Link></Typography>;
          break;
        case "button": value = <Button color={"primary"}>{element[2]}</Button>;
          break;
        default: value = ""
      }
      return value;
    }
    return data;
  }

  // function cardElements(data: string) {
  //   const element = data.split("|");
  //   let value;
  //   if (element[0] === "KW") {
  //     switch (element[1]) {
  //       case "textfield": value = (<TextField label={element[2]} size={element[4]} style={{
  //         width: element[3]
  //       }} />);
  //         break;
  //       case "searchfield": value = (<Search label={element[2]} />);
  //         break;
  //       case "dropdown": value = (<div style={{ width: element[3] }}><Dropdown label={element[2]} size={element[4]}>
  //         <DropdownItem label="None" value="None" />
  //         {stringOptions.map((option) => {
  //           return (
  //             <DropdownItem
  //               key={option}
  //               label={option}
  //               value={option}
  //             />
  //           );
  //         })}
  //       </Dropdown> </div>);
  //         break;
  //       case "checkbox": value = (<FormControlLabel
  //         control={<Checkbox />}
  //         label={element[2]}
  //       />);
  //         break;
  //       case "radiobutton": value = (<FormControlLabel
  //         control={<Radio />}
  //         label={element[2]}
  //       />);
  //         break;
  //       case "switch": value = (<FormControlLabel
  //         control={<Switch />}
  //         label={element[2]}
  //       />);
  //         break;
  //       case "icon": value = <div><Icon
  //         name={element[2]}
  //         style={{
  //           width: element[3],
  //           height: element[3]
  //         }}
  //       /></div>
  //         break;
  //       case "typography": value = <Typography variant={element[3]}>{element[2]}</Typography>;
  //         break;
  //       case "textlink": value = <Typography variant={element[3]}><TextLink>{element[2]}</TextLink></Typography>;
  //         break;
  //       case "button": value = <Button color={element[3]}>{element[2]}</Button>;
  //         break;
  //       default: value = ""
  //     }
  //     return value;
  //   }
  //   return data;
  // }


  function test(): void {
    setCount(count + 1);
    setMyEvent(count);
  }

  const trackPos = (data: any, i: number, obj: string) => {
    let componentDetail: any = pageComponentsDetail.components(obj);
    componentDetail[i].pos.x = data.x;
    componentDetail[i].pos.y = data.y;
    pageComponentsDetail.setComponent(obj, componentDetail);
    selectedComponent(obj, i);
  };

  function createDesign(designJson: any): void {
    const newArr = Object.keys(JSON.parse(designJson));
    const newObj = JSON.parse(designJson);
    newArr.forEach((arr: any) => {
      pageComponentsDetail.setComponent(arr, newObj[arr]);
    });
    handleClose();
  }

  function onChangeFile(event: any): void {
    const file = event.target.files[0];
    setPageName(file.name.split(".")[0]);
    const reader = new FileReader();
    reader.onload = function (event) {
      createDesign(event?.target?.result);
    };
    reader.readAsText(file);
  }

  function saveDesign() {
    fileDownload(JSON.stringify(pageComponentsDetail.getComponent), `${pageName}.json`);
    setSnackbarOpen(true);
  }

  const handleClickOpen = () => {
    setDesignExist(true);
  };

  const handleClose = () => {
    setDesignExist(false);
  };

  function selectedComponent(name: string, ind: number) {
    setShowComponentData(true);
    let data;
    switch (name) {
      case "alert": data = <ShowAlertPage changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "card": data = <ShowCardPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "list": data = <ShowListPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "table": data = <ShowTablePage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "textField": data = <ShowTextfieldPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "dropdown": data = <ShowDropdownPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "radioButton": data = <ShowRadiobuttonPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "button": data = <ShowButtonPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "icon": data = <ShowIconPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "checkbox": data = <ShowCheckboxPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "divider": data = <ShowDividerPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "switch": data = <ShowSwitchPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "snack": data = <ShowSnackbarPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      case "typography": data = <ShowTextPage drag={count} changeState={() => setShowComponentData(false)} index={ind} />;
        break;
      default: data = <></>
    }
    setShowData(data)
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  if (designExist) {
    return (
      <div>
        <Dialog open={designExist} onClose={handleClose} id="basicDialog">
          <DialogTitle>Work on existing design</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" accept=".json" onChange={(e) => onChangeFile(e)} />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }



  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Design Builder
            </Typography>
            <Button
              color="inherit"
              onClick={() => saveDesign()}
            >
              <SaveIcon />
            </Button>
            <Button
              color="inherit"
              onClick={() => handleClickOpen()}
            >
              <UploadFileIcon />
            </Button>
            <Button
              color="inherit"
              onClick={() => setShowComponent(true)}
            >
              <MenuIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div id="section">
        {sectionOne()}
      </div>
      {showComponentData ? <Draggable>
        <Card id="card" style={{ border: "0.1rem solid black", overflow: "auto", width: "31%", height: "100%" }}>
          <CardHeader action={
            <IconButton onClick={() => setShowComponentData(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          } />
          <CardContent id="cardData" >
            {showData}
          </CardContent>
        </Card></Draggable> : null}
      <Drawer
        open={showComponent}
        onClose={() => setShowComponent(false)}
        anchor="right"
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <TextField
            name="pagename"
            onChange={handleChange}
            label="Enter Page Name"
            value={pageName}
          ></TextField>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("alert")}>
              <ListItemText primary="Alert" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("button")}>
              <ListItemText primary="Button" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("card")}>
              <ListItemText primary="Card" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("checkbox")}>
              <ListItemText primary="Checkbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("divider")}>
              <ListItemText primary="Divider" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("dropdown")}>
              <ListItemText primary="Select" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("icon")}>
              <ListItemText primary="Icon" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("alert")}>
              <ListItemText primary="List" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("switch")}>
              <ListItemText primary="Switch" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("table")}>
              <ListItemText primary="Table" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("snack")}>
              <ListItemText primary="Snack" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("typography")}>
              <ListItemText primary="Text" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => pageComponentsDetail.addComponent("textField")}>
              <ListItemText primary="TextField" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

PageDesign.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PageDesign;


