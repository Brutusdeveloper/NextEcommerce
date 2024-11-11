import { defineField, defineType } from "sanity";

export default defineType({
    type:"document",
    name:"category",
    title:"category",
    fields:[
        defineField({
            name:"title",
            title:"title",
            type:"string"
        }),

        defineField({
            name:"description",
            title:"Description",
            type:"string"
        }),
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true
            }
        })
    ]
})