import React, { createContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const PageComponents = createContext({
    components: (element: string) => { return {} },
    getComponent: {},
    combined: () => [] as any[],
    setComponent: (element: any, value: any) => { },
    addComponent: (element: string) => { },
    alertArray: [] as any[],
    cardArray: [] as any[],
    textfieldArray: [] as any[],
    dropdownfieldArray: [] as any[],
    snackbarArray: [] as any[],
    switchArray: [] as any[],
    dividerArray: [] as any[],
    checkboxArray: [] as any[],
    textLinkArray: [] as any[],
    iconArray: [] as any[],
    radiobuttonArray: [] as any[],
    typographyArray: [] as any[],
    buttonArray: [] as any[],
    tableArray: [] as any[],
    listArray: [] as any[]
});

export function PageDetails(props: any) {
    const { control, getValues, setValue } = useForm({
        defaultValues: {
            button: [] as any[],
            icon: [] as any[],
            textField: [] as any[],
            dropdown: [] as any[],
            typography: [] as any[],
            radioButton: [] as any[],
            table: [] as any[],
            textLink: [] as any[],
            checkbox: [] as any[],
            divider: [] as any[],
            alert: [] as any[],
            card: [] as any[],
            switch: [] as any[],
            snack: [] as any[],
            list: [] as any[],
        }
    });
    const {
        fields: alertFields,
        append: alertAppend
    } = useFieldArray({
        control,
        name: "alert"
    });
    const {
        fields: cardFields,
        append: cardAppend
    } = useFieldArray({
        control,
        name: "card"
    });
    const {
        fields: textFieldFields,
        append: textFieldAppend
    } = useFieldArray({
        control,
        name: "textField"
    });
    const {
        fields: dropdownFields,
        append: dropdownAppend
    } = useFieldArray({
        control,
        name: "dropdown"
    });
    const {
        fields: buttonFields,
        append: buttonAppend
    } = useFieldArray({
        control,
        name: "button"
    });
    const {
        fields: typographyFields,
        append: typographyAppend
    } = useFieldArray({
        control,
        name: "typography"
    });
    const {
        fields: radioButtonFields,
        append: radioButtonAppend
    } = useFieldArray({
        control,
        name: "radioButton"
    });
    const {
        fields: iconFields,
        append: iconAppend
    } = useFieldArray({
        control,
        name: "icon"
    });
    const {
        fields: linkFields,
        append: linkAppend
    } = useFieldArray({
        control,
        name: "textLink"
    });
    const {
        fields: checkFields,
        append: checkAppend
    } = useFieldArray({
        control,
        name: "checkbox"
    });
    const {
        fields: dividerFields,
        append: dividerAppend
    } = useFieldArray({
        control,
        name: "divider"
    });
    const {
        fields: switchFields,
        append: switchAppend,
    } = useFieldArray({
        control,
        name: "switch"
    });
    const {
        fields: snackFields,
        append: snackAppend
    } = useFieldArray({
        control,
        name: "snack"
    });
    const {
        fields: listFields,
        append: listAppend
    } = useFieldArray({
        control,
        name: "list"
    });
    const {
        fields: tableFields,
        append: tableAppend,
    } = useFieldArray({
        control,
        name: "table"
    });

    const designArray = getValues();

    function addElement(element: string) {
        switch (element) {
            case "alert": alertAppend({
                componentType: "alert",
                index: alertFields.length,
                content: "Content",
                severity: "success",
                pos: {
                    x: 0,
                    y: 0
                }
            });
                break;
            case "card": cardAppend({
                componentType: "card",
                index: cardFields.length,
                content: "Content",
                component: "KW",
                header: "Title",
                height: "",
                width: "",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "list": listAppend({
                componentType: "list",
                index: listFields.length,
                item: "Primary,Secondary",
                pos: {
                    x: 0,
                    y: 0
                },
                width: "",
                height: ""
            })
                break;
            case "table": tableAppend({
                componentType: "table",
                index: tableFields.length,
                header: "Header1,Header2",
                body: "Body1,Body2/nBody3,Body4",
                pos: {
                    x: 0,
                    y: 0
                },
                width: "",
                height: ""
            })
                break;
            case "textField": textFieldAppend({
                componentType: "textField",
                index: textFieldFields.length,
                label: "Text Field",
                width: "",
                required: false,
                multiline: false,
                size: "medium",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "dropdown": dropdownAppend({
                componentType: "dropdown",
                index: dropdownFields.length,
                size: "medium",
                width: "21.875rem",
                label: "Dropdown",
                required: false,
                data: "",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "radioButton": radioButtonAppend({
                componentType: "radioButton",
                index: radioButtonFields.length,
                label: "Radio",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "button": buttonAppend({
                componentType: "button",
                index: buttonFields.length,
                label: "Button",
                width: "",
                height: "",
                variant: "contained",
                color: "primary",
                iconLocation: "start",
                dropdown: "",
                pos: {
                    x: 0,
                    y: 0
                },
                icon: ""
            })
                break;
            case "icon": iconAppend({
                componentType: "icon",
                index: iconFields.length,
                size: "",
                pos: {
                    x: 0,
                    y: 0
                },
                name: "save",
                color: "black"
            })
                break;
            case "checkbox": checkAppend({
                componentType: "checkbox",
                index: checkFields.length,
                label: "CheckBox",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "divider": dividerAppend({
                componentType: "divider",
                index: dividerFields.length,
                height: "0.2rem",
                variant: "fullwidth",
                back: "black",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "switch": switchAppend({
                componentType: "switch",
                index: switchFields.length,
                label: "switch",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "snack": snackAppend({
                componentType: "snack",
                index: snackFields.length,
                content: "Content",
                type: "success",
                pos: {
                    x: 0,
                    y: 0
                }
            })
                break;
            case "typography": typographyAppend({
                componentType: "typography",
                index: typographyFields.length,
                size: "",
                color: "",
                pos: {
                    x: 0,
                    y: 0
                },
                value: "Text"
            })
                break;
            case "textLink": linkAppend({
                componentType: "textLink",
                index: linkFields.length,
                size: "",
                pos: {
                    x: 0,
                    y: 0
                },
                value: "Link"
            })
                break;
            default: const data = <></>
        }
    }

    function combinedArray() {
        return [...alertFields,...cardFields,...linkFields,...tableFields,...dropdownFields,...radioButtonFields,...iconFields,...checkFields,...dividerFields,
        ...switchFields,...snackFields,...linkFields,...typographyFields,...buttonFields, ...textFieldFields];
    }

    const data = {
        combined: combinedArray,
        components: getValues,
        getComponent: designArray,
        setComponent: setValue,
        addComponent: addElement,
        alertArray: alertFields,
        cardArray: cardFields,
        textfieldArray: textFieldFields,
        dropdownfieldArray: dropdownFields,
        snackbarArray: snackFields,
        switchArray: switchFields,
        dividerArray: dividerFields,
        checkboxArray: checkFields,
        textLinkArray: linkFields,
        iconArray: iconFields,
        radiobuttonArray: radioButtonFields,
        typographyArray: typographyFields,
        buttonArray: buttonFields,
        tableArray: tableFields,
        listArray: listFields
    }

    return (
        <PageComponents.Provider value={data}>
            {props.children}
        </PageComponents.Provider>
    )
}

export default PageComponents;
