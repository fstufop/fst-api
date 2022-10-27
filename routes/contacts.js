const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send(
        [
            {
            "id": 1,
            "name": "Shakira",
            "photoURL": "https://picsum.photos/id/237/200/200"
            },
            {
            "id": 2,
            "name": "Beyonce",
            "photoURL": "https://picsum.photos/id/236/200/200"
            },
            {
            "id": 3,
            "name": "Tom Cruise",
            "photoURL": "https://picsum.photos/id/235/200/200"
            },
            {
            "id": 4,
            "name": "Tiririca",
            "photoURL": "https://picsum.photos/id/234/200/200"
            },
            {
            "id": 5,
            "name": "Steve Rogers",
            "photoURL": "https://picsum.photos/id/233/200/200"
            },
            {
            "id": 6,
            "name": "Steve Jobs",
            "photoURL": "https://picsum.photos/id/232/200/200"
            },
            {
            "id": 7,
            "name": "Scott Forstall",
            "photoURL": "https://picsum.photos/id/231/200/200"
            },
            {
            "id": 8,
            "name": "Craig Federighi",
            "photoURL": "https://picsum.photos/id/230/200/200"
            },
            {
            "id": 9,
            "name": "Steve Ballmer",
            "photoURL": "https://picsum.photos/id/229/200/200"
            },
            {
            "id": 10,
            "name": "Lucas 1",
            "photoURL": "https://picsum.photos/id/228/200/200"
            },
            {
            "id": 11,
            "name": "Lucas 2",
            "photoURL": "https://picsum.photos/id/227/200/200"
            },
            {
            "id": 12,
            "name": "Fernando",
            "photoURL": "https://picsum.photos/id/240/200/200"
            },
            {
            "id": 13,
            "name": "Judar",
            "photoURL": "https://picsum.photos/id/225/200/200"
            }
        ])
});

module.exports = router;