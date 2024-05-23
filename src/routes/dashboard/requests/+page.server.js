import {supabase} from '$lib/supabaseClient'

export async function load() {
    const {data} = await supabase.from('service_requests').select("*")
    return {
        requests: data ?? []
    }
}