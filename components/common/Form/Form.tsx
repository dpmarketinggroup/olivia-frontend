import { SyntheticEvent, useState } from "react";
import { Checkbox, Textarea, TextInput, Input, Loader } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ReCAPTCHA from 'react-google-recaptcha';
import useRecaptcha from '@components/common/useRecaptcha'
import PaperPlaneIcon from "@components/icons/PaperPlane";
import { OverButtonIcon } from "@components/icons";
interface FormProps {
  meeting?: boolean;
  isGreen: boolean;
}

const Form = ({ meeting = false, isGreen }: FormProps) => {
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const router = useRouter();
  const [isClicked1, setClicked1] = useState(false);
  const [isClicked2, setClicked2] = useState(false);


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<E164Number>();
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  function getApartment() {
    if (!isClicked1 && !isClicked2) return;
    if (isClicked1) return "apartmán";
    if (isClicked2) return "obchodný priestor";
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!name || !surname || !email || !capchaToken) return;

    try {
      setLoading(true);
      await axios.post("/api/enquiry", {
        body: JSON.stringify({
          type: `${meeting ? "stretnutie" : "kontakt"}`,
          name,
          surname,
          email,
          phone,
          message,
          apartment: getApartment(),
        }),
      });

      await router.push("/dakujeme");
    } catch (e) {

      await router.push("/notsender");
      console.log(name + surname + email + phone + message);
    }



    // Reset captcha after submission
    recaptchaRef.current?.reset();
    setLoading(false);



  }
  const { t: translate } = useTranslation("home");
  return (
    <form onSubmit={handleSubmit} className={isGreen ? "green" : "grey"}>
      <div className="mx-4 xl:mx-0">
        {meeting && (
          <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[20px] items-center mb-[45px]">
            <span className="font-medium text-[14px] xl:text-[16px] leading-6 tracking-[0.1px] text-white">
              {translate("form-interested-in")}
            </span>
            <Checkbox
              checked={isClicked1}
              onClick={() => {
                if (isClicked2) setClicked2(false);
                setClicked1(!isClicked1);
              }}
              label={
                <>
                  <span className="font-bold text-[16px] xl:text-[18px] leading-7 text-white">
                    {translate("form-interested-apartment")}
                  </span>
                </>
              }
              radius="xl"
            />
            <Checkbox
              checked={isClicked2}
              onClick={() => {
                if (isClicked1) setClicked1(false);
                setClicked2(!isClicked2);
              }}
              label={
                <>
                  <span className="font-bold text-[16px] xl:text-[18px] leading-7 text-white">
                    {translate("form-interested-commercial")}
                  </span>
                </>
              }
              radius="xl"
            />
          </div>
        )}
        <div className="flex flex-col gap-[15px] w-full xl:w-[645px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translate("form-first-name") + "*" || ""}
              radius="xs"
              required={true}
              withAsterisk

            />

            <TextInput
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder={translate("form-second-name") + "*" || ""}
              radius="xs"
              required={true}
              withAsterisk

            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              radius="xs"
              required={true}
              withAsterisk

            />

            <TextInput
              style={{
                height: "50px",
              }}

              value={phone}

              className={`placeholder:text-black ${isGreen && "green"}`}
              onChange={(val) => setPhone(val.target.value)}
              placeholder={translate("form-number") || ""}
            />
          </div>
          <Textarea

            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={translate("form-message") || ""}
            radius="xs"
            minRows={3}
            maxRows={6}
          />
          <Checkbox
            required={true}
            label={
              <>
                <p className="text-[14px] leading-5 text-black">
                  {translate("form-check-1-1")}{" "}
                  <Link href="/gdpr">
                    <a className="underline text-primary">{translate("form-check-1-2")}</a>
                  </Link>
                </p>
              </>
            }
            radius="xs"
            color="#476761"
          />
          <Checkbox
            className="mb-[20px] xl:mb-0"
            label={
              <>
                <p className="text-[14px] leading-5 text-black">
                  {translate("form-check-2")}
                </p>
              </>
            }
            radius="xs"
            color="green"
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfjnccpAAAAABzMDixAyBN6mGhwdeV8vezeXIDv"
            onChange={handleRecaptcha}
          />
          <button
            disabled={loading || !capchaToken}
            className={`py-[12px] ${meeting
              ? "relative bg-yellow text-white  flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px]"
              : "relative bg-primary text-white  flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px]"
              } text-white flex items-center justify-center gap-[10px] w-full md:w-fit h-[63px] group hover:bg-white hover:scale-105 transform transition-transform duration-300 ease-in-out drop-shadow-md`}
          >

            <p className="text-[18px] group-hover:text-primary text-white leading-[18px]"> {translate("form-button")}</p>

            <div className="group-hover:hidden">
              <PaperPlaneIcon fill="white" />

            </div>
            <div className="group-hover:block hidden">
              <PaperPlaneIcon fill="#087168" />

            </div>
            <div className="absolute z-[10] top-0 right-0">
              <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out ">

                <OverButtonIcon />
              </div>
              <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                <OverButtonIcon fill="#087168" />
              </div></div>
            {loading && <Loader size={20} />}
          </button>

        </div>
      </div>
    </form >
  );
};

export default Form;
