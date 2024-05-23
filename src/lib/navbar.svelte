<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js"
    import njit from '$lib/assets/njit.png'
    import * as Avatar from '$lib/components/ui/avatar/index.js'
    import * as Popover from '$lib/components/ui/popover/index.js'

    import {supabase} from '$lib/supabaseClient'

    const scrollDepth = 150;
    let y = 0;  

    let navbar_links = [
        {name: "Home", link:"/", variant: "secondary_link"},
        {name: "Our Services", link: "/services", variant:"secondary_link", class:""},
        {name: "Contact Us", link: "/contact",variant:"secondary_link", class:""},
    ]

    let right_nav_links = [
        {name: "Dashboard", link:"/dashboard", variant:"secondary", class:"bg-green-600 hover:bg-green-700/80 h-8"},
    ]

    async function signIn() {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: 'srflebbe@gmail.com',
            password: '123'
        });

        console.log(data)
    }
</script>

<svelte:window bind:scrollY={y}/>

<nav class="fixed top-0 z-50 flex w-full grid grid-cols-5 items-center px-24 h-16 space bg-slate-950 {y < scrollDepth ? 'bg-opacity-10' : 'bg-opacity-100'}">
    <span>
        <a href="/"><img class="w-24" src={njit} alt="NJIT Logo"></a>
    </span>
    <span></span>
    <div class="space-x-4 flex justify-center items-center">
        {#each navbar_links as link}
        <Button class="font-bold {link.class}" href={link.link} variant={link.variant}>{link.name}</Button>
        {/each}
    </div>
    <span></span>
    <div class="flex justify-center items-right gap-4">
        {#each right_nav_links as link}
        <Button class="font-bold {link.class}" href={link.link} variant={link.variant}>{link.name}</Button>
        {/each}
        <Popover.Root>
            <Popover.Trigger>
                <Avatar.Root>
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
            </Popover.Trigger>
            <Popover.Content class="w-80" >
                <div class="grid gap-4">
                    <div>
                        <h1>User</h1>
                        <p class="text-sm text-muted-foreground">Sample</p>
                    </div>
                    <div>
                        <Button on:click={signIn}>Login</Button>
                    </div>
                </div>
            </Popover.Content>
        </Popover.Root>
    </div>
</nav>