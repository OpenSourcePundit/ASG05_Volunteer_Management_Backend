import Event from "../models/event.model.js";


const addEvent = async(req, res)=>{
    try {
       const {eventName, date, location, description, roles} = req.body;
       if(!eventName || !date || !location || !description || !roles){
        return res.status(404).json({
            success: false,
            message:"please enter eventName or date or location or description or roles",
            
            })
        }
        const event = await Event.create(req.body);
        res.status(201).json({
            success: true,
            message:"event added successfully",
            event,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can not create event",
            error: error.message
        })
    }
}


const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json({
            success: true,
            message:"All Events",
            events,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Can not get all events",
            error: error.message
        })
    }
}


// update an event
const updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({
                success: false,
                message:"Can not find event",
            })
        }
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body,{new :true});
        res.status(200).json({
            success:true,
            message:"Event updated Successfully",
            event: updatedEvent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update the event',
            error: e.message
          })
    }
};


// Delete an event
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({
                success: false,
                message:"Can not find event",
            })
        }
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message:"Event deleted successfully",
            event: deletedEvent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete the event',
            error: e.message
          })
    }
};

export {addEvent, getAllEvents, updateEvent, deleteEvent} 