import React, {FunctionComponent} from "react";
import {Checkbox, Textarea, TextInput, CheckboxProps } from "@mantine/core";

interface FormKontakt{
    meeting?: boolean
}

const FormKontakt: FunctionComponent<FormKontakt> = ({meeting= false}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {
                meeting &&
                <div className="flex gap-[20px] items-center mb-[45px]">
                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white">Mám záujem o:</span>
                    <Checkbox label={
                        <>
                    <span className="font-bold text-[18px] leading-7 text-white">
                        byty
                    </span>
                        </>
                    } radius="xl"
                    />
                    <Checkbox label={
                        <>
                    <span className="font-bold text-[18px] leading-7 text-white">
                        obchodné priestory
                    </span>
                        </>
                    } radius="xl"
                    />
                </div>
            }
            <div className="flex flex-col gap-[15px] w-[645px]">
                <div className="grid grid-cols-2 gap-[16px] w-full">
                    <TextInput placeholder="Meno" radius="xs"/>
                    <TextInput placeholder="Priezvisko" radius="xs"/>
                </div>
                <TextInput placeholder="Email" radius="xs"/>
                <TextInput placeholder="Tel. č." radius="xs"/>
                <Textarea placeholder="Správa"
                          radius="xs"
                          minRows={6}
                          maxRows={6}
                />
                <Checkbox label={
                    <>
                        <p className="text-[14px] leading-5 text-[#999999]">Súhlasím so spracovaním <span className="underline">osobných údajov</span>
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
                <button className={`py-[12px] ${meeting ? "bg-[#89A6A2]" : "bg-[#476761]"} text-white`}>Odoslať</button>
            </div>
        </form>
    )
}

export default FormKontakt;