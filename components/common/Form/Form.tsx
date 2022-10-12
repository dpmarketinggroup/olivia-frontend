import {SyntheticEvent, useState} from "react";
import {Checkbox, Textarea, TextInput} from "@mantine/core";
import Link from "next/link";
import axios from "axios";

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

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!name || !surname || !email || !phone || !message) return;
        await axios.post('/api/enquiry', {
            body: JSON.stringify({
                name,
                surname,
                email,
                phone,
                message
            })
        })
    }

    return (
        <form onSubmit={handleSubmit} className={isGreen ? "green" : "grey"}>
            <div className="mx-4 xl:mx-0">
                {
                    meeting &&
                    <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[20px] items-center mb-[45px]">
                        <span className="font-medium text-[14px] xl:text-[16px] leading-6 tracking-[0.1px] text-white">Mám záujem o:</span>
                        <Checkbox disabled={isClicked2 && true}
                                  onClick={() => setClicked1(!isClicked1)}
                                  label={
                                      <>
                    <span className="font-bold text-[16px] xl:text-[18px] leading-7 text-white">
                        apartmán
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
                <div className="flex flex-col gap-[15px] w-full xl:w-[645px]">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] w-full">
                        <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Meno" radius="xs"
                                   required={true} withAsterisk/>
                        <TextInput value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Priezvisko"
                                   radius="xs" required={true} withAsterisk/>
                    </div>
                    <TextInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" radius="xs"
                               required={true} withAsterisk/>
                    <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tel. č."
                               radius="xs"/>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Správa"
                              radius="xs"
                              minRows={6}
                              maxRows={6}
                              required={true}
                              withAsterisk
                    />
                    <Checkbox label={
                        <>
                            <p className="text-[14px] leading-5 text-[#999999]">Súhlasím so spracovaním <Link
                                href="/gdpr"><a
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
            </div>
        </form>
    )
}

export default Form;
