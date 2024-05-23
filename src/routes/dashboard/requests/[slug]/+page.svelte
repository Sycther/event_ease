<script>
    import FullCalendar from 'svelte-fullcalendar'
    import timeGridPlugin from '@fullcalendar/timegrid';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import listPlugin from '@fullcalendar/list';
    
    export let data;

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
        events: data.request[0].events,
    };

    console.log(data)
</script>

{#if data.request != null}
<div class="flex m-5">
    <div>
        <p>{data.request[0].name}</p>
        <p>{data.request[0].status}</p>
        {#each data.request[0].events as event}
        <p>{event.title}, {event.start}, {event.end}</p>
        {/each}
        <FullCalendar {options} />
    </div>
</div>
{:else}
<p>Nothing Here</p>
{/if}