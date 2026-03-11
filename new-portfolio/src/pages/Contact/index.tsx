import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";
import AnimatedText from "../../components/AnimatedText";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_3rhu7y8",
        "template_3fl7z2g",
        formRef.current,
        "vyg3G4w_znoTTNBJ8"
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Email error:", error);
    }

    setLoading(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        <div className={styles.contentContainer}>
          <AnimatedText
            text="Send me an email!"
            delayPerChar={0.05}
            size="extraLarge"
            color="gold"
          />
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className={styles.formContainer}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className={styles.textarea}
          />

          <Button
            border="red"
            size="large"
            name="submitButton"
            disabled={loading}
            className={styles.button}
          >
            <Text className={styles.buttonText} color="white">
              {loading ? "Sending..." : "Send Message"}
            </Text>
          </Button>

          {success && (
            <p className={styles.success}>Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
