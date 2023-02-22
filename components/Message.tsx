import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGTP = message.user.name === "ChatGPT";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.text.length) {
        setTypedText((prevText) => prevText + message.text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 0);
    return () => clearInterval(interval);
  }, [message.text]);

  return (
    <div className={`py-5 text-white ${isChatGTP && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl ml-2">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-sm">{isChatGTP ? typedText : message.text}</p>
      </div>
    </div>
  );
}

export default Message;
