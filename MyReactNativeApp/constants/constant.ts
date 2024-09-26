import { TypeOfDropDown, TypeOfDropDownList } from "@/types";

export const recipes: TypeOfDropDown[] = [
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "C++", value: "cpp" },
];

export const isCupLast: TypeOfDropDown[] = [
    {
        label: "Yes",
        value: "yes",
    },
    {
        label: "No",
        value: "no",
    }
];

export const position: TypeOfDropDown[] = [
    {
        label: "Top",
        value: "top",
    },
    {
        label: "Bottom",
        value: "bottom",
    }
]


export const dropDownLists:TypeOfDropDownList[] = [
    {
        name: "Recipe",
        list: recipes,
        placeholder: "Select a recipe",
        subname: "recipe",
    },
    {
        name: "Position",
        list: position,
        placeholder: "Select position",
        subname: "position",
    },
    {
        name: "Is Cup Last",
        list: isCupLast,
        placeholder: "Select if cup is last",
        subname:"isCupLast",
    }

]