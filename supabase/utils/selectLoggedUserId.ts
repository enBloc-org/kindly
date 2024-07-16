import newClient from './newClient';

export default async function selectLoggedUserId() {
  const supabase = newClient();
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error;

    return data.session?.user.id;
  } catch (error) {
    console.error('Error getting user session: ', error);
  }
}
