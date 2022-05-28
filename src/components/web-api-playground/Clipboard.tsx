import { useEffect, useState } from "preact/hooks";

const Clipboard = () => {
  const getClipboardContents = async () => {
    navigator.clipboard.read().then(
      async ([contents]) => {
        setPermissionMessage("✔️ You are allowed to read clipboard contents");
        const types = contents.types;
        if (contents.types.includes("text/plain")) {
          const blob = await contents.getType("text/plain");
          const blobText = await blob.text();
          setClipboardText(blobText);
          setClipboardImageSrc(undefined);
        } else if (contents.types.includes("image/png")) {
          const blob = await contents.getType("image/png");
          setClipboardImageSrc(URL.createObjectURL(blob));
          setClipboardText(undefined);
        } else if (contents.types.includes("image/jpeg")) {
          const blob = await contents.getType("image/jpeg");
          setClipboardImageSrc(URL.createObjectURL(blob));
          setClipboardText(undefined);
        } else {
          setClipboardText("[Clipboard content MIME type not supported]");
        }
      },
      (error) => {
        if (error.name === "NotAllowedError") {
          setPermissionMessage(
            "❌ You are not read to access clipboard contents"
          );
        } else if (error.name === "DataError") {
          setPermissionMessage(
            "❗ You are allowed to read clipboard contents, but your clipboard is empty!"
          );
        } else {
          console.warn("I'm not expecting this!", error.name);
        }
      }
    );
  };

  const writeClipboardContents = async (textContent: string) => {
    navigator.clipboard.writeText(textContent).then(
      () => {
        setClipboardText(textContent);
        setClipboardImageSrc(undefined);
      },
      () => {
        console.error("Clipboard write failed!");
      }
    );
  };

  const [clipboardText, setClipboardText] = useState<string | undefined>();

  const [clipboardImageSrc, setClipboardImageSrc] = useState<
    string | undefined
  >();

  const [permissionMessage, setPermissionMessage] = useState(
    "❓ Undetermined if you are allowed to read clipboard contents"
  );

  return (
    <details>
      <summary>Clipboard</summary>
      <p>
        The Clipboard API is only available in secure contexts. Some allow it
        based on browser permissions (whether it's allowed for the site).
      </p>
      <p>Permission settings: {permissionMessage}</p>
      <div className="row">
        <button onClick={getClipboardContents}>Read Clipboard</button>
        <button
          onClick={() =>
            writeClipboardContents(
              "The history of all hitherto existing society is the history of class struggles."
            )
          }
        >
          Copy Text to Clipboard
        </button>
      </div>
      <p>Your clipboard text contents are: {clipboardText}</p>
      <p>
        Your clipboard image contents are:{" "}
        {!clipboardImageSrc && "[No image in clipboard]"}
      </p>
      <img src={clipboardImageSrc} />
      <p>And a place to paste text</p>
      <textarea name="" id="" cols="30" rows="5"></textarea>
    </details>
  );
};

export default Clipboard;
