export default {
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Product'
        },
        {
            name:'category',
            title:'Product Categry',
            type:'reference',
            to:{
                type:'category'
            }
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description of Product'
        },
        {
            name:'slug',
            type:'slug',
            title:'Product Slug',
            options:{
                source:'name'
            }
        },
        {
            name:'price',
            type:'number',
            title:'Price'
        }
    ]
}