<template>
    <header class="bg-dark">
        <nav class="navbar navbar-dark navbar-expand-lg container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BoolPress</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/posts/:id"></router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>