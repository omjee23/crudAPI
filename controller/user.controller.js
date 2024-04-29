const model = require('../model/user.model');

const userRegister = async (req , res ) => {
    try {
        const userData = req.body;
        const userInfo = new model(userData);
        await userInfo.save();
        res.send({status:200, message:"successfully registered"});
    } catch (error) {
        res.send({status:500 , message:error.message});
    }
};

const seeRegisterUSer = async (req, res) => {
    try {
        const user  = await model.find({},{_id: 0, __v:0});
        if(!user){
            res.send({status:404 , message:"No Data found"})
        }
        return res.send(user)

    } catch (error) {
        res.send({status:500 , message:error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id ;
        const newData = req.body;
        const findData = await model.findByIdAndUpdate(id.trim(), newData,{
            new : true,
            runValidators : true
        });
        if (!findData) {
            return res.send({status:404, message:'Role Number is not found'});
        }
        res.send({status:200, message:'Data Updateted successfully'});
    } catch (error) {
        res.send({status:500 , message:error.message});
    }
}

const deleteUser =  async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body
        const deleteInfo = await model.findOneAndDelete({_id: id})
        if(!deleteInfo) {
            return res.send({status:404, message:'Role Number is not found'});
        }
        res.send({status:200 , message:"Data Deleted Successfully"})
    } catch (error) {
        res.send({status:500 , message:error.message});
    }
};

module.exports = {userRegister,seeRegisterUSer,updateUser,deleteUser}