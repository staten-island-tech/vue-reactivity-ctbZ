<template>
    <div class="home">
        <h1 v-if="graduated">{{ student }}</h1>
        <h1 v-else>They did not yet graduate</h1>
    </div>
</template>