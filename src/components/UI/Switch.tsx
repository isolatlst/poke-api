import React from 'react';
import cl from "./UI.module.scss";

type PropType = {
    name: string
    first_title: string
    second_title: string
    first_value: string
    second_value: string
    first_text: string
    second_text: string
    callback: (value: string) => void
}

const Switch: React.FC<PropType> = (props) => {
    return (
        <div className={cl.switch}>
            <label className={cl.switch__label} title={props.first_title}>
                <input type="radio" name={props.name} value={props.first_value}
                       onClick={e => props.callback(e.currentTarget.value)}/>
                {props.first_text}
            </label>
            <label className={cl.switch__label} title={props.second_title}>
                <input type="radio" name={props.name} value={props.second_value} defaultChecked
                       onClick={e => props.callback(e.currentTarget.value)} />
                {props.second_text}
            </label>
        </div>
    );
};

export default Switch;