<template>
    <footer>
        <p>&copy;{{getCurrentYear}} by <a href="href">MySleekDesigns</a></p>
    </footer>
</template>

<script>

export default {
    data: () => ({
        href: 'http://www.mysleekdesigns.com'
    }),
    computed: {
        getCurrentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>
    footer {
        text-align: center;
        color: #00a672;
        letter-spacing: 0.5px;
        padding: 20px;
    }
</style>