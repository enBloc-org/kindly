import selectSystemUser from './selectSystemUser';
import insertMessage from './insertMessage';

/**
 *
 * @description introduces a new message to the target conversation under the user_id of a pre-set system user
 * @param conversationId the Id to be targeted in the 'conversations' table
 * @param message message body to be introduced as a message to users
 */
export default async function insertSystemMessage(
  conversationId: number,
  message: string
) {
  try {
    const systemUser = await selectSystemUser();
    await insertMessage(systemUser, conversationId, message);
  } catch (error) {
    console.error(`Error processing a system message: ${error}`);
    throw error;
  }
}
