import { useState, useEffect } from "react";

function TypingText({ text, speed = 80, pause = 1300, deleteSpeed = 90 }) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayed === text) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      const nextText = isDeleting
        ? text.slice(0, displayed.length - 1)
        : text.slice(0, displayed.length + 1);

      timeout = setTimeout(
        () => setDisplayed(nextText),
        isDeleting ? deleteSpeed : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, speed, deleteSpeed, pause]);

  return <>{displayed}</>;
}

export default TypingText;
