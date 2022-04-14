import * as tuitsDao from "../daos/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.postedBy = {username: "ReactMaster"};
    newTuit.stats = {likes: 10, dislikes: 5, retuits: 8, comments: 4}
    newTuit.handle = "reactmaster";
    newTuit.avatarImg = "../../../images/react-blue.png"
    newTuit.disliked = false;
    newTuit.liked = false;
    console.log("New tuit:", newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    console.log("Updated tuit:", updatedTuit);
    const update = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    const status = update ? 200 : 500;
    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    console.log("Tuit to dlt:", tuitIdToDelete);
    const deleted = await tuitsDao.deleteTuit(tuitIdToDelete);
    const status = deleted ? 200 : 500;
    res.sendStatus(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
