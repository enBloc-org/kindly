import selectSystemUser from './selectSystemUser';
import insertMessage from './insertMessage';

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
