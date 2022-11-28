import tuitsModel from './tuits-model.js';
export const findTuits = async () => {
    const allTuits = await tuitsModel.find()
    return allTuits
};
export const createTuit = async (tuit) => {
    const insertedTuit = await tuitsModel.create(tuit)
    return insertedTuit
};
export const deleteTuit = async (tid) => {
    const deletedTuit = await tuitsModel.deleteOne({_id: tid})
    return deletedTuit
};
export const updateTuit = async (tid, tuit) => {
    const updatedTuit = await tuitsModel.updateOne({_id: tid}, {$set: tuit})
    return updatedTuit
}

