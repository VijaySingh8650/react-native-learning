import { TypeOfDropDown, TypeOfDropDownList } from "@/types";

// Mix Berry, Blueberry Fruit Punch, Pineapple Mojito, Mango Shake, Badam Thandai, Berry Ice Tea, Choco Banana, Cold Coffee, Protein Shake

export const recipes: TypeOfDropDown[] = [
    { label: "Mix Berry", value: "Mix Berry" },
    { label: "Blueberry Fruit Punch", value: "Blueberry Fruit Punch" },
    { label: "Pineapple Mojito", value: "Pineapple Mojito" },
    { label: "Mango Shake", value: "Mango Shake" },
    { label: "Badam Thandai", value: "Badam Thandai" },
    { label: "Berry Ice Tea", value: "Berry Ice Tea" },
    { label: "Choco Banana", value: "Choco Banana" },
    { label: "Cold Coffee", value: "Cold Coffee" },
    { label: "Protein Shake", value: "Protein Shake" },
    { label: "Strawberry Shake", value: "Strawberry Shake" },
];

export const isCupLast: TypeOfDropDown[] = [
    {
        label: "Yes",
        value: "1",
    },
    {
        label: "No",
        value: "0",
    }
];

export const position: TypeOfDropDown[] = [
    {
        label: "11",
        value: "11",
    },
    {
        label: "12",
        value: "12",
    },
    {
        label: "13",
        value: "13",
    }
    ,
    {
        label: "14",
        value: "14",
    }
    ,
    {
        label: "15",
        value: "15",
    }
    ,
    {
        label: "21",
        value: "21",
    }
    ,
    {
        label: "22",
        value: "22",
    }
    ,
    {
        label: "23",
        value: "23",
    }
    ,
    {
        label: "24",
        value: "24",
    }
    ,
    {
        label: "25",
        value: "25",
    }
    ,
    {
        label: "31",
        value: "31",
    }
    ,
    {
        label: "32",
        value: "32",
    }
    ,
    {
        label: "33",
        value: "33",
    }
    ,
    {
        label: "34",
        value: "34",
    }
    ,
    {
        label: "35",
        value: "35",
    }
    ,
    {
        label: "41",
        value: "41",
    }
    ,
    {
        label: "42",
        value: "42",
    }
    ,
    {
        label: "43",
        value: "43",
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