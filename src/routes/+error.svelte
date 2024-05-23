<script>
    import Footer from "$lib/Footer.svelte";
    import Navbar from '$lib/navbar.svelte'
    import studio from '$lib/assets/studio.png'
    import tricaster from '$lib/assets/tricaster.jpg'
	import { page } from '$app/stores';

    console.log($page.error);
</script>


<Navbar />

<main class="relative min-h-screen">
    <div class="w-full bg-cover bg-center h-[18rem] flex justify-center items-center" style="background: url({studio})">
        <p class="text-8xl font-bold text-white underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">ERROR: {$page.status}</p>
    </div>
     
    <div class="mx-16 h-full">
        <div class="w-full p-2 space-x-4 grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-center">
            <div class="w-full text-right">
                <p class="font-bold text-4xl underline">{$page.error?.message}</p>
            </div>
        </div>
    </div>

    <Footer/>
</main>