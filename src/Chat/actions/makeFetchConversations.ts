import { getConversations } from "../../api/messages"
import { updateConversationList } from "./updateConversationList"

export function makeFetchConversations(){
  return async (dispatch: any) => {
    try {
      const conversations = await getConversations();
      dispatch(updateConversationList(conversations));
    } catch(err) {
      console.error(err);
    }
  }
}