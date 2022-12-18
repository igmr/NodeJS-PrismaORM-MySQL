const prisma = require('./../prisma/prisma')

// * CREATE
const create = async (data) =>{
    return await prisma.post.create({
        data:data
    })
}

// * READ
const findAll = async ()=>{
    return await prisma.post.findMany()
}

const find = async (id)=>{
    id = Number(id)
    return await prisma.post.findFirst({
        where: {id:id}
    })
}

//* UPDATE
const update = async (id, data)=>{
    id = Number(id)
    return await prisma.post.update({
        where:{id:id},
        data:data
    })
}

// * DELETE
const destroy = async (id)=>{
    id = Number(id)
    return await prisma.post.delete({
        where: {id:id}
    })
}

const existPostById = async (id)=>{
    id = Number(id)
    return await prisma.post.count({
        where:{id:id}
    })
}

module.exports = { create, findAll, find,
    update, destroy,
    existPostById}

// * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference
