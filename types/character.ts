export type CharacterResults = {
    characters: {
        results :{
            id: string,
            name:string
            image:string,
            status:string,
            species:string,
            location :{
                name: string
            }
        }[]
    }
}

export type Character = {
   character:{
       id: string,
       name:string,
       image:string,
       status:string,
       species:string,
       location :{
        name:string
       }
   }

}