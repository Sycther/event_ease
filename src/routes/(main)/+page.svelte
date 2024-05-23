<script>
    import studio from '$lib/assets/studio.png'
    import tricaster from '$lib/assets/tricaster.jpg'

    let services= [
        "PTZ Cameras",
        "Broadcast Cameras",
        "Streaming & Recording",
        "Handheld Mics",
        "Projection",
    ]
</script>

<main class="relative">
    <div class="w-full bg-cover bg-center h-[32rem] flex justify-center items-center" style="background: url({studio})">
        <p class="text-8xl font-bold text-white underline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">NJIT Audio & Video Services</p>
    </div>
    
    <div class="mx-16">
        <div class="w-full p-2 space-x-4 grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-center">
            <div class="w-full text-right">
                <p class="font-bold text-4xl underline">Our Services</p>
                <div class="font-semibold text-2xl">
                    <ul>
                        {#each services as service}
                        <li class="font-light">{service}</li>
                        {/each}
                        <li>And more...</li>
                    </ul>
                </div>
            </div>
            <div class="w-full">
                <img src={tricaster} class="rounded-lg h-auto" alt="TriCaster Station"/>
            </div>
        </div>
    </div>


    <div class="w-full space-x-4 bg-surface-200 h-96 py-4 px-24">
        <div class="w-full border border-1 h-full">

        </div>
    </div>
</main>