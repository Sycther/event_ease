<script>
    import * as Table from '$lib/components/ui/table'

    export let data;
</script>

<p>Hello</p>

<Table.Root>
    <Table.Caption>Service Requests</Table.Caption>
    <Table.Header>
        <Table.Row>
            <Table.Head class="w-5"></Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head>Client Description</Table.Head>
            <Table.Head>Notes</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Invoice</Table.Head>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each data.requests as request}
        <Table.Row>
            <Table.Cell><a href="/dashboard/requests/{request.id}" class="text-blue-500">Edit</a></Table.Cell>
            <Table.Cell>{request.name}</Table.Cell>
            <Table.Cell>{request.client_desc}</Table.Cell>
            <Table.Cell>{request.notes}</Table.Cell>
            <Table.Cell>{request.status}</Table.Cell>
            <Table.Cell>{request.invoice}</Table.Cell>
        </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>