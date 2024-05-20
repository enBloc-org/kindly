import newClient from '@/supabase/utils/newClient';

export default async function selectSystemUser() {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', 'trafalgargirls')
      .single();

    if (error) throw error;

    const systemUser = data.id as string;

    return systemUser;
  } catch (error) {
    console.error(`Error retrieving system user: ${error}`);
    throw error;
  }
}
