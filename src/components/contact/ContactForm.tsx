import { useRef, useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import Toast from "../reusable/Toast";

interface ToastData {
  message: string;
  type: "success" | "error";
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    formData.append("time", new Date().toLocaleString());

    emailjs.sendForm(
      "service_mw940vl",
      "template_kz5lu8d",
      form.current,
      "6_gbGm0uk7QizkzOM"
    )
      .then(() => {
        setToast({
          message: "Message sent successfully! 🚀",
          type: "success"
        });
        setVisible(true);
        form.current?.reset();
      })
      .catch(() => {
        setToast({
          message: "Failed to send message. Please try again.",
          type: "error"
        });
        setVisible(true);
      });

    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>

      {toast && (
        <Toast
          visible={visible}
          message={toast.message}
          type={toast.type}
          onClose={() => setVisible(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
