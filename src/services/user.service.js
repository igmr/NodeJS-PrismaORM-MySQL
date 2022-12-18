const prisma = require('./../prisma/prisma')

// * CREATE
const create = async(data)=>{
    return await prisma.user.create({
        data:data
    })
}

// * READ
const findAll = async ()=>{
    return await prisma.user.findMany()
}
const find = async (id)=>{
    id = Number(id)
    return await prisma.user.findFirst({
        where:{id:id}
    })
}

// * UPDATE
const update = async (id, data)=>{
    id = Number(id)
    return await prisma.user.update({
        where:{id:id},
        data:data
    })
}
// * DELETE
const destroy = async (id)=>{
    id = Number(id)
    return await prisma.user.delete({
        where: {id:id}
    })
}

const existUserByEmail = async (email)=>{
    return await prisma.user.count({
        where:{email:email}
    })
}

const existUserById = async (id)=>{
    id = Number(id)
    return await prisma.user.count({
        where:{id:id}
    })
}

module.exports = {create, findAll, find,
    update, destroy,
    existUserByEmail,existUserById
}

// * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference
