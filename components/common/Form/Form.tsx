import {useState} from "react";
import {Checkbox, Textarea, TextInput} from "@mantine/core";
import Link from "next/link";

interface FormProps {
    meeting?: boolean
    isGreen: boolean
}

const Form
    = ({
           meeting = false,
           isGreen
       }: FormProps) => {
    const [isClicked1, setClicked1] = useState(false);
    const [isClicked2, setClicked2] = useState(false);

    return (
        <form onSubmit={(e) => e.preventDefault()}
              className={isGreen ? "green" : "grey"}>
            {
                meeting &&
                <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[20px] xl:items-center mb-[45px]">
                    <span className="font-medium text-[14px] xl:text-[16px] leading-6 tracking-[0.1px] text-white">Mám záujem o:</span>
                    <Checkbox disabled={isClicked2 && true}
                              onClick={() => setClicked1(!isClicked1)}
                              label={
                                  <>
                    <span className="font-bold text-[16px] xl:text-[18px] leading-7 text-white">
                        byty
                    </span>
                                  </>
                              } radius="xl"
                    />
                    <Checkbox disabled={isClicked1 && true}
                              onClick={() => setClicked2(!isClicked2)}
                              label={
                                  <>
                    <span className="font-bold text-[16px] xl:text-[18px] leading-7 text-white">
                        obchodné priestory
                    </span>
                                  </>
                              } radius="xl"
                    />
                </div>
            }
            <div className="flex flex-col gap-[15px] w-[384px] xl:w-[645px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] w-full">
                    <TextInput placeholder="Meno" radius="xs" required={true} withAsterisk/>
                    <TextInput placeholder="Priezvisko" radius="xs" required={true} withAsterisk/>
                </div>
                <TextInput placeholder="Email" radius="xs" required={true} withAsterisk/>
                <TextInput placeholder="Tel. č." radius="xs"/>
                <Textarea placeholder="Správa"
                          radius="xs"
                          minRows={6}
                          maxRows={6}
                          required={true}
                          withAsterisk
                />
                <Checkbox label={
                    <>
                        <p className="text-[14px] leading-5 text-[#999999]">Súhlasím so spracovaním <Link
                            href="/pages/gdpr"><a
                            className="underline">osobných údajov</a></Link>
                        </p>
                    </>
                } radius="xs" color="#476761"/>
                <Checkbox className="mb-[20px] xl:mb-0" label={
                    <>
                        <p className="text-[14px] leading-5 text-[#999999]">
                            Chcem aby ste mi zasielali novinky o projekte
                        </p>
                    </>
                } radius="xs" color="green"/>
                <button
                    className={`py-[12px] ${meeting ? " bg-[#89A6A2] hover:bg-[#476761]" : "bg-[#476761] hover:bg-primary"} text-white`}>Odoslať
                </button>
            </div>
        </form>
    )
}

export default Form;
