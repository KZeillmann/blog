import { useEffect, useState } from "preact/hooks";

const ContactPicker = () => {
  const [supportMessage, setSupportMessage] = useState(
    "❓ Undetermined if Contact Picker API is supported in your browser"
  );

  useEffect(() => {
    const supported = "contacts" in navigator;
    if (supported) {
      setSupportMessage("Contact Picker API is supported in your browser");
    } else {
      setSupportMessage(
        "❌Contact Picker API is not supported in your browser"
      );
    }
  });
  return (
    <details id="contact-picker" open>
      <summary>Contact Picker</summary>
      <p>
        This is an experimental API only currently supported on Android devices.
      </p>
      <p>Support: {supportMessage}</p>
    </details>
  );
};

export default ContactPicker;
