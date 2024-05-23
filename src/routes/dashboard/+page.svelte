<script>
    import { supabase } from "$lib/supabaseClient";
    import {Button} from '$lib/components/ui/button/index.js';

    import FullCalendar from 'svelte-fullcalendar'
    import timeGridPlugin from '@fullcalendar/timegrid';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import listPlugin from '@fullcalendar/list';

    export let data;
    console.log(data.events);


    let options  = {
        initialView: 'timeGridWeek',
        allDaySlot:false,
        height: '50rem',
        plugins: [timeGridPlugin, listPlugin, dayGridPlugin],
        headerToolbar: {
            left: 'listWeek,timeGridWeek,dayGridWeek,dayGridMonth',
            center: 'title',
            right: 'prev,next',
        },
        buttonText: {
            list: "List",
            week: "Week"
        },
        events: data.events,
    };

    async function add_request() {
        const data1 = await supabase.from('service_requests').insert({invoice:'100'}).select('id');
        const data2 = await supabase.from('events').insert({request_id: data1.data[0].id}).select('*');
        console.log("Data: ", data1);
    }

    
</script>

<Button on:click={add_request}>Click me?</Button>

<FullCalendar {options} />
