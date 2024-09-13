const express = require('express')
const router = express.Router()


// declare the array of users
const users = []

router.get('/', (req, res) => {
    res.status(200).json(users)
})


// Create a user

router.post('/', (req, res) =>{
    const  data = req.body
    const user = {
        id: users.length,
        Name: data.Name,
        Gender: data.Gender,
        Age: data.Age
    }
    users.push(user)
    res.status(201).json({message: 'user created successfully', user})
})

// Update users
router.put('/:id', (req, res) =>{
    const id = req.params.id
    if (id >= users.length) {
        res.status(404).json({message: `User not found`})
        return
    }
    const user = req.body
    users[id] = user
    res.status(200).json(user)
    return
})

router.delete("/:id", (req, res) =>{
    const id = req.params.id
    if (id >= users.length) {
        res.status(404).json({message: `Users not found`})
        return
    }

    users.splice(id, 1)
    res.status(200).json({message: `User deleted successfully`})
    return
})

module.exports = router