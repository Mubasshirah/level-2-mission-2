import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()
// client will send request to router and router will call controller function.
router.post('/create-student', StudentController.createStudentController)
router.get('/', StudentController.getStudentData)
router.get('/:studentId', StudentController.getSingleStudentData)

export const StudentRoute = router
