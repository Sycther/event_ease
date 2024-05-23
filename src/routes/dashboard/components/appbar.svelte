<script>
    import njit from '$lib/assets/njit.png'
    import Button from './button/button.svelte';
    import { IconHeart } from '@tabler/icons-svelte';

    let menu_links = [
        {name: "Admin", items: [
        {   name: "Dashboard",
            link:"/dashboard",
            icon: ""
        },{   
            name: "Requests",
            link:"/dashboard/requests"
        },{
            name: "Invoice", 
            link:"/dashboard/invoice"
        },]},
        {name: "Personal", items: [{
            name: "My Events", 
            link:"/dashboard/my_events"
        },{
            name: "Messages",
            link: "/dashboard/inbox"
        },]},
    ]
</script>

<div class="fixed inset-y-0 left-0 h-screen w-48 bg-slate-900">
    <div class="flex flex-col justify-betwen h-full p-5">
        <a href="/" class="flex justify-center pb-4 border-b border-b-gray-400">
            <img src={njit} alt="NJIT Logo" class="h-14">
        </a>
        <ul class="mt-4 color-white">
            {#each menu_links as category}
            <span class="text-gray-400 font-bold">{category.name}</span>
            {#each category.items as item}
            <Button variant="ghost" href={item.link} class=" text-white w-full">{item.name}</Button>
            {/each}
            {/each}
        </ul>
    </div>
</div>