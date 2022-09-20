import React, {FunctionComponent} from "react";
import {Checkbox, Textarea, TextInput} from "@mantine/core";


const FormKontakt = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-[15px] w-[645px]">
                <div className="grid grid-cols-2 gap-[16px] w-full">
                    <TextInput placeholder="Meno" radius="xs"/>
                    <TextInput placeholder="Priezvisko" radius="xs"/>
                </div>
                <TextInput placeholder="Email" radius="xs"/>
                <TextInput placeholder="Tel. č." radius="xs"/>
                <Textarea placeholder="Správa"
                          radius="xs"
                          minRows={4}
                          maxRows={4}
                />
                <Checkbox label={
                    <>
                        <p className="text-[14px] leading-5 text-[#999999]">Súhlasím so spracovaním
                            <span className="underline"> ososbných údajov</span>
                        </p>
                    </>
                } radius="xs" color="#476761" checked={true}/>
                <Checkbox label={
                    <>
                        <p className="text-[14px] leading-5 text-[#999999]">
                            Chcem aby ste mi zasielali novinky o projekte
                        </p>
                    </>
                } radius="xs" color="green" checked={true}/>
                <button className="py-[12px] bg-[#476761] text-white">Odoslať</button>
            </div>
        </form>
    )
}

export default FormKontakt;