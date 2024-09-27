export type TypeOfDropDown = {
    label: string;
    value: string;
};

export type TypeOfDropDownList = {
    name: string;
    list: TypeOfDropDown[];
    placeholder: string;
    subname: string;
}

export type TypeOfSelectedItems = {
    recipe: string;
    position: string;
    isCupLast: string;
}
