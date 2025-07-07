import { useState, type FormEvent } from "react";

import styles from './KernRadioGroup.module.css'
import KernRadio from "./KernRadio";

export type KernRadioItem = {
    id: string,
    value?: string,
    label: string,
    checked?:boolean
}


function KernRadioGroup({
    name,
    selected,
    items,
    autoFocus
} : {
    name: string,
    selected: string,
    items: KernRadioItem[]
    autoFocus?: boolean
} ){

    const [selectedState, setSelected] = useState(selected);

    const handleChange = (event:FormEvent) => {

        event.stopPropagation();

        setSelected( ( event.target as HTMLInputElement).value);

    };

    return (

        <section className={styles.container} onChange={handleChange}>
            {items.map( (item:KernRadioItem, index:number) => {
                return (
                    <KernRadio 
                        key={index}
                        name={name} 
                        id={item.id} 
                        label={item.label}
                        value={item.value}
                        autoFocus={autoFocus && index === 0 ? autoFocus : false}
                        checked={selectedState === item.value}
                        onChange={handleChange}
                    />

                )
            })}
        </section>

    )


}

export default KernRadioGroup