<template>
    <div class="grid space-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CharacterCard 
            v-for="{ id, name, image, status, species, location } in data?.characters.results" 
            :key="id"
            :id="id" 
            :name="name" 
            :image="image" 
            :status="status" 
            :species="species" 
            :location="location.name" 
        />
    </div>
</template>

<script lang="ts" setup>

    import { CharacterResults } from '~/types/character'

    const query = gql`
        query getCharacters {
        characters {
            results {
                name
                image
                status
                id
                species 
                location {
                    name
                }
            }
        }
    }`

    const { data } = await useAsyncQuery<CharacterResults>(query)

</script>