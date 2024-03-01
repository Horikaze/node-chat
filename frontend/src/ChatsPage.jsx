import {
  useMultiChatLogic,
  MultiChatWindow,
  MultiChatSocket,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "d0775f37-a66c-4968-9c24-3a936f15da05",
    // eslint-disable-next-line react/prop-types
    props.user.username,
    // eslint-disable-next-line react/prop-types
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }} className="background">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
