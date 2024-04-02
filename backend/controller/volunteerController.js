import Volunteer from "../models/volunteer.model.js";
import Volunteers from "../models/volunteer.model.js";

const addVolunteer = async(req, res)=>{
    try {
        const {name, contactInfo, skills, availability, areasOfInterest, volunteerHistory, assignedEvents} = req.body;
        if(!name || !contactInfo || !skills || !availability || !areasOfInterest || !volunteerHistory || !assignedEvents){
            return res.status(404).json({
                success: false,
                message: "Please enter all required information",
            })
        }

        const volunteer = await Volunteers.create(req.body);
        res.status(201).json({
            success:true,
            message:"Volunteer created successfully",
            volunteer,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Volunteer can not be created",
            error:error.message
        })
    }
}


const getAllVolunteers = async (req, res)=>{
    try {
        const volunteers = await Volunteer.find({});
        res.status(200).json({
            success:true,
            message:"All Volunteers",
            volunteers,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Volunteer not found",
            error:error.message
        })
    }
}

const updateVolunteer = async (req, res)=>{
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if(!volunteer){
            return res.status(404).json({
                success:false,
                message:"Volunteer not found",
            })
        }
        const updateVolunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json({
            success:true, 
            message:"Volunteer updated Successfully",
            volunteer:updateVolunteer
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Volunteer can not be updated",
            error:error.message
        })
    }
};

const deleteVolunteer = async (req, res)=>{
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if(!volunteer){
            return res.status(404).json({
                success:false,
                message:"Volunteer not found",
            })
        }
        const deletedVolunteer = await Volunteer.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true, 
            message:"Volunteer updated Successfully",
            volunteer:deletedVolunteer
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Volunteer can not be deleted",
            error:error.message
        })
    }
}



export {addVolunteer, getAllVolunteers, updateVolunteer, deleteVolunteer}