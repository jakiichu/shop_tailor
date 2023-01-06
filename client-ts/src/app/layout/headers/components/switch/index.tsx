import React, {FC, useState} from 'react';
import {Person, Pets} from "@mui/icons-material";
import {Box, Switch} from "@mui/material";
import {SWITCH_COMPONENTS as style} from './_style'

interface ISwitch{
    setterSomeone:()=>void,

}
const SwitchSomeone:FC<ISwitch> = (props:ISwitch) => {
    let [checked, setChecked] = useState(true);

    const handleChange = () => {
        props.setterSomeone()
        setChecked(!checked);
    };
    return (
        <style.BorderSwitch>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            {
                checked?
                    <style.PersonSwitch/>
                    :
                    <style.PetsSwitch/>
            }

        </style.BorderSwitch>
    );
};

export {SwitchSomeone};