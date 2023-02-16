import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    chatID: string;
  };
};

function chatPage({ params: { chatID } }: Props) {
  console.log(chatID);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat chatID={chatID} />
      {/* Chat input*/}
      <ChatInput chatID={chatID} />
    </div>
  );
}

export default chatPage;
