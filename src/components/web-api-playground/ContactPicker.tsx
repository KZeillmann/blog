import { useEffect, useState } from "preact/hooks";

const ContactPicker = () => {
  const [supportMessage, setSupportMessage] = useState(
    "❓ Undetermined if Contact Picker API is supported in your browser"
  );
  const [supported, setSupported] = useState(false);

  // TODO: Get good types on this
  const [selectedContact, setSelectedContact] = useState<any>(undefined);

  useEffect(() => {
    const supported = "contacts" in navigator;
    if (supported) {
      setSupportMessage("✔️ Contact Picker API is supported in your browser");
      setSupported(true);
    } else {
      setSupportMessage(
        "❌Contact Picker API is not supported in your browser"
      );
    }
  });

  const selectContact = async () => {
    const props = ["name", "email", "tel", "address", "icon"];
    const [contact] = await navigator.contacts.select(props);
    setSelectedContact(contact);
  };

  return (
    <details id="contact-picker" open>
      <summary>Contact Picker</summary>
      <p>
        This is an experimental API only currently supported on Android devices.
      </p>
      <p>Support: {supportMessage}</p>

      {supported && <button onClick={selectContact}>Select a Contact</button>}
      {selectedContact && (
        <>
          <h3>Contact Details</h3>
          <ul>
            <li>Name: {selectedContact.name}</li>
            <li>Emails: {selectedContact.email.join(", ")}</li>
            <li>Telephone: {selectedContact.tel}</li>
            <li>Address (JSON): {selectedContact.address.toJSON()}</li>
            <li>
              Icon: <img src={URL.createObjectURL(selectedContact.icon[0])} />
            </li>
          </ul>
        </>
      )}
    </details>
  );
};

export default ContactPicker;
