import { getConversations } from "../../api/messages"
import { updateConversationList } from "./UpdateConversationList"

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