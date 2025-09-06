

import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import Button from "../../Components/Button/Button.jsx";
// import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init( import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: `Contact Us: ${formData.subject}`,
          message: formData.message,
        }
      );
      toast.success("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message");
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.parent}>
      <Toaster position="top-center" />
      <div className={styles.wrapper}>
        <div className={styles["sections-contact"]}>
          <div className={styles["heading"]}>
            <strong>
              GET IN <span style={{ color: "pink" }}>TOUCH</span>
            </strong>
          </div>
          <div className={styles["form-and-text"]}>
            <div className={styles.text}>
              <h1 className={styles["text-h1"]} style={{ color: "pink" }}>
                Don't be shy!
              </h1>
              <p className={styles["text-p"]}>
                Feel free to get in touch with me. I am always open to discussing
                new projects, creative ideas or opportunities.
              </p>
              <div className={styles.mailbox}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <div className={styles["mail-text"]}>
                  <h3 className={styles["mail-h3"]}>MAIL ME</h3>
                  <p className={styles["mail-p"]}>kiratsingh2181@gmail.com</p>
                </div>
              </div>
              <div className={styles.mailbox}>
                <div className={styles.icon}>
                  <FaPhone />
                </div>
                <div className={styles["mail-text"]}>
                  <h3 className={styles["mail-h3"]}>WHATSAPP ME</h3>
                  <p className={styles["mail-p"]}>8837663671</p>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                  <input
                    className={styles.inputField}
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className={styles.inputField}
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className={styles.inputField}
                    type="text"
                    name="subject"
                    placeholder="YOUR SUBJECT"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.msg}>
                  <textarea
                    className={styles.Textarea}
                    name="message"
                    placeholder="YOUR MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <Button
                  value={isLoading ? "Sending..." : "Submit"}
                  type="submit"
                  disabled={isLoading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

