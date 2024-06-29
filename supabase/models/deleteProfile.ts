import newClient from '../utils/newClient';

export default async function deleteProfile(userId: string) {
  const supabase = newClient();
  try {
    const { data } = await supabase.auth.admin.deleteUser(userId);
    console.log(data);
  } catch (error) {
    console.error(`Error deleting account: ${error}`);
    throw error;
  }
}
