<template>

    <div class="m-3 bg-gray-300 rounded-xl flex justify-center">
        <NuxtLink :to="`/characters/${props.id}`">
            <NuxtImg
                :src="props.image"
                :modifiers="grayScaleWhenDead"
                 class="rounded-xl mt-3 w-full"  
            />
            <div class="m-3 text-center">
                <h3 class="text-xl mb-3">{{ props.name }}</h3>
                <p>Status: {{ props.status }}</p>
                <p>Species: {{ props.species }}</p>
                <p>Location: {{ props.location }}</p>
            </div>
        </NuxtLink>
    </div>
    
</template>

<script setup lang="ts">

    const props = defineProps({
        name:{
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        species: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    });

    // permet de retourner un style dynamique à savoir passer à true la propriété "grayscale" qui permet de mettre l'image en gris
    // lorsque le status du perso est 'Dead'
    const grayScaleWhenDead = computed(() => props.status === 'Dead' ? { grayscale: true } : {})

</script>
