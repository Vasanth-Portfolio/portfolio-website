import { useRef, useState, FormEvent } from "react";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import Toast from "../reusable/Toast";

interface ToastData {
  message: string;
  type: "success" | "error";
}

const OWNER_EMAIL = "vasanthvinv@gmail.com";
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)
  ?? "ea28d5a5-0db5-424d-a3fc-46d7f4fdee93";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  };

  const sendViaWeb3Forms = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        from_name: data.name,
        email: data.email,
        subject: data.subject || "Portfolio Contact",
        message: data.message,
      }),
    });
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.message || "Web3Forms failed");
  };

  const sendViaEmailJS = async (formEl: HTMLFormElement) => {
    const { default: emailjs } = await import("emailjs-com");
    const result = await emailjs.sendForm(
      "service_mw940vl",
      "template_kz5lu8d",
      formEl,
      "6_gbGm0uk7QizkzOM"
    );
    if (result.status !== 200) throw new Error("EmailJS failed");
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current || sending) return;

    const data = {
      name: (form.current.elements.namedItem("name") as HTMLInputElement)?.value?.trim(),
      email: (form.current.elements.namedItem("email") as HTMLInputElement)?.value?.trim(),
      subject: (form.current.elements.namedItem("subject") as HTMLInputElement)?.value?.trim(),
      message: (form.current.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      showToast("Please fill in your name, email, and message.", "error");
      return;
    }

    setSending(true);

    try {
      // Try Web3Forms first (more reliable, no monthly cap)
      if (WEB3FORMS_KEY) {
        await sendViaWeb3Forms(data);
      } else {
        // Fall back to EmailJS if no Web3Forms key configured
        await sendViaEmailJS(form.current);
      }
      showToast("Message sent! I'll get back to you soon.", "success");
      form.current.reset();
    } catch (primaryError) {
      // If Web3Forms key exists but failed, try EmailJS as second fallback
      if (WEB3FORMS_KEY) {
        try {
          await sendViaEmailJS(form.current);
          showToast("Message sent! I'll get back to you soon.", "success");
          form.current.reset();
        } catch {
          showToast(
            `Couldn't send automatically. Email me directly at ${OWNER_EMAIL}`,
            "error"
          );
        }
      } else {
        showToast(
          `Couldn't send automatically. Email me directly at ${OWNER_EMAIL}`,
          "error"
        );
      }
    } finally {
      setSending(false);
    }
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

          <div className="mt-6 flex items-center gap-4">
            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500 disabled:opacity-60 disabled:cursor-not-allowed">
              <Button
                title={sending ? "Sending..." : "Send Message"}
                type="submit"
                aria-label="Send Message"
              />
            </div>
            {/* Always-visible direct email fallback */}
            <a
              href={`mailto:${OWNER_EMAIL}`}
              className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              or email directly
            </a>
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
