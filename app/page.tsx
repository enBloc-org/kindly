

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { RetreiveFromSupabase } from "@/utils/supabase/RetreiveFromSupabase";
import EnquireButton from "@/components/EnquireButton";



export default async function Index() {
  return (
    <div>
      <EnquireButton/>
      <h1>Kindly</h1>
    </div>
  );
}
