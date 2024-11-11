import { title } from "process";
import { defineField, defineType } from "sanity";


export default defineType({
    name:"product",
    title:"product",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
            description:"keep the title relative to product",
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"title",
                maxLength:96
            },
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"array",
            of:[{type:"reference", to:{type:"category"}, validation:(rule)=>rule.required()}]
        }),
        defineField({
            name:"price",
            title:"Price",
            type:"number",
            validation:(rule)=>rule.required(),
        }),
        defineField({
            name:"rowprice",
            title:"Row Price",
            type:"number",
        }),
        defineField({
            name:"ratings",
            title:"Ratings",
            type:"number",
            description:"Raings must be equal or below 5"
        }),
        defineField({
            name:"brand",
            title:"Brand",
            type:"string"
        }),
        defineField({
            name:"isnew",
            title:"New Arrival",
            type:"number" 
        }),
        defineField({
            name:"quantity",
            title:"Quantity",
            type:"number"
        })
    ],
    preview:{
        select: {
            title: "title",
            media: "image",
            position: "position"
        }
    }
})