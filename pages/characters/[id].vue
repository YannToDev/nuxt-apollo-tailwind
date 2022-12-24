<template>
    <div class="mt-20 max-w-xl mx-auto">
        <CharacterCard 
            :id="data.character.id"
            :name="data.character.name"
            :image ="data.character.image"
            :status="data.character.status"
            :species="data.character.species"
            :location="data.character.location.name"
        />
    </div>
</template>

<script setup lang="ts">

    import { Character } from '~/types/character' 

    const route = useRoute();

    const query = gql`
        query getCharacter {
            character(id: ${route.params.id}) {
             
                name
                image
                status
                id
                species 
                location {
                    name
                }
            }
        }`

const { data } = await useAsyncQuery<Character>(query)

</script>

