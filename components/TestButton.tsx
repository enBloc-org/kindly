'use client'

import AddRowToSupabase from "@/utils/supabase/AddRowToSupabase"
import EditSupabaseRow from "@/utils/supabase/EditSupabaseRow"

export default function(){
    return(<button onClick={() => {
        {
          AddRowToSupabase('items',{item_name:'test',brand: 'harrods'})
        }
      }}>add</button>)
}