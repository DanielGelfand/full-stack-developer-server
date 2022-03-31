import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.postedBy = {"username": "React Master"};
    newTuit.stats = {
        "comments": 123,
        "retuits": 234,
        "likes": 345,
        "dislikes": 100
    }
    newTuit.handle = "ReactMaster"
    newTuit.avatarImg = "../../../images/react-blue.png"
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => res.json(tuits);
const updateTuit = (req, res) => {

    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    // console.log("Updated tuit:", updatedTuit);
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
