import {supabase } from '$lib/supabaseClient'

// /** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const {data} = await supabase.from('service_requests').select("*, events(*)").eq("id", params.slug)
    return {request: data}
}