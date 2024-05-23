<script>
    import AppBar from './components/appbar.svelte'
</script>

<div class="relative">
    <AppBar/>
    <div class="ml-48 p-8">
        <slot/>
    </div>
</div>

