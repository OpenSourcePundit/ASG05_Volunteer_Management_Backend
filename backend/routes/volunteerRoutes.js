import express from 'express';
import {getAllVolunteers, addVolunteer, updateVolunteer, deleteVolunteer} from "../controller/volunteerController.js"

const volunteerRoutes = express.Router();

volunteerRoutes.post('/new', addVolunteer);
volunteerRoutes.get('/all', getAllVolunteers);
volunteerRoutes.put('/:id', updateVolunteer);
volunteerRoutes.delete('/:id', deleteVolunteer);


export default volunteerRoutes;