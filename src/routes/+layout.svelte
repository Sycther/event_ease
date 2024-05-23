<script>
    import { invalidateAll } from "$app/navigation";
    import { supabase } from '$lib/supabaseClient';
    import {onMount} from 'svelte';
    import "../app.pcss";

    onMount(() => {
        const {data: {subscription}} = supabase.auth.onAuthStateChange(()=> {
            invalidateAll()
        })

        return  () =>{
            subscription.unsubscribe();
        }
    })
</script>

<slot/>