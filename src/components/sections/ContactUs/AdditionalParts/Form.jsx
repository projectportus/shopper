import { useState } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";
import Button from "@/components/shared/sharedComponents/Universals/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "83d22330-3b62-4a36-8560-49990c0d52ad");

    const json = JSON.stringify(Object.fromEntries(formDataObj));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (error) {
      setSuccessMessage("Something went wrong. Please try again. ❌");
    }
  };

  return (
    <div className="w-full md:h-[1114px] flex items-end justify-center ">
      <div className="w-[90%] md:h-[90%] flex flex-col items-center  ">
        <div className=" h-fit flex flex-col items-center mt-[20px] md:mt-0">
          <div className="text-[8vw] md:text-[36px] font-semibold w-fit">
            Get In Touch With Us
          </div>
          <div className="w-fit flex flex-col items-center mt-[10px] md:mt-0">
            <div className="text-[4vw] md:text-[16px] text-center text-gray-400  md:text-justify w-fit ">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us
            </div>
            <div className="text-[4vw] md:text-[16px] text-center text-gray-400  md:text-justify w-fit ">
              An Email Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </div>
          </div>
        </div>

        <div className="w-[90%]  md:h-full  flex flex-col md:flex-row md:justify-between gap-5">
          <div className="contact-info md:w-[393px] order-2 md:order-1 bg-white h-[537px] mt-[68px]  justify-center flex flex-col gap-5 items-center">
            <div className="block-info w-[263px] h-fit  flex justify-around ">
              <div className="icon-badge">
                <MapPin />
              </div>

              <div className=" w-fit h-fit">
                <div className="text-[24px] font-bold ">Address</div>
                <div>
                  236 5th SE Avenue, New <br /> York NY10000, <br /> United
                  States
                </div>
              </div>
            </div>

            <div className="block-info w-[263px] h-fit flex justify-around">
              <div className="icon-badge">
                <Phone />
              </div>
              <div className=" w-fit h-fit">
                <div className="text-[24px] font-bold">Phone</div>
                <div>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </div>
              </div>
            </div>

            <div className="block-info w-[263px] h-fit  flex justify-around">
              <div className="icon-badge">
                <Clock />
              </div>
              <div className=" w-fit h-fit">
                <div className="text-[24px] font-bold">Working Time</div>
                <div>
                  Monday-Friday: 9:00 - <br /> 22:00 <br />
                  Saturday-Sunday: 9:00 - <br />
                  21:00
                </div>
              </div>
            </div>
          </div>

          <div className="form-block md:w-[80%] order-1 mt-[20px] md:mt-0 md:order-2 h-full flex justify-center  items-center">
            <div className="w-[85%] md:h-[90%] flex flex-col ">
              <form
                onSubmit={handleSubmit}
                className="w-full h-[90%] gap-5 md:gap-0 flex flex-col justify-around"
              >
                <div className="h-fit relative w-full flex flex-col justify-between ">
                  <label className="text-[16px]" htmlFor="">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Abc"
                    name="name"
                    className={`h-[75px] mt-[22px] w-full border-2 ${
                      errors.name ? "border-[#B88E2F]" : "border-gray-500"
                    } rounded-[10px] outline-none p-5 text-[16px]`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className=" text-sm absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="h-fit relative w-full flex flex-col justify-between ">
                  <label className="text-[16px]" htmlFor="">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Abc@def.com"
                    className={`h-[75px] mt-[22px] w-full border-2 ${
                      errors.email ? "border-[#B88E2F]" : "border-gray-500"
                    } rounded-[10px] outline-none p-5 text-[16px]`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className=" absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px] text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="h-fit relative w-full flex flex-col justify-between ">
                  <label className="text-[16px]" htmlFor="">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="This is an optional"
                    className="h-[75px] mt-[22px] w-full border-2 border-gray-500 rounded-[10px] outline-none p-5 text-[16px]"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div className="h-fit relative w-full flex flex-col justify-between ">
                  <label className="text-[16px]" htmlFor="">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`h-[150px] w-full border-2 mt-[22px] ${
                      errors.message ? "border-[#B88E2F]" : "border-gray-500"
                    } rounded-[10px] outline-none p-5 text-[16px] resize-none`}
                    placeholder="Hi! I’d like to ask about..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className=" absolute translate-y-[-60%] w-fit bg-white left-[10px] top-[48px] text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex h-[10%] justify-center md:justify-start md:items-end mt-[20px] md:mt-0">
                  <button type="submit">
                    <Button text={"SUBMIT"} width={"196px"} height={"48px"} />
                  </button>
                </div>
              </form>

              {successMessage && (
                <div className="mt-3 p-2 bg-[#B88E2F] w-fit text-white rounded">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
