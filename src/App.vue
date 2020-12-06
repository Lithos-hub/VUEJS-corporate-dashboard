<template>
<v-app>
    <Navbar />

    <v-main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    name: 'App',

    components: {
        Navbar
    },

    data: () => ({}),

};
</script>

<style>
.text-h1 {

    text-shadow: 0px 0px 20px rgb(0, 0, 0);
    text-transform: uppercase;

}
</style>
