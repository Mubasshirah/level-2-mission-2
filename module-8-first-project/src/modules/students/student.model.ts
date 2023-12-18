import { Schema, model} from 'mongoose'
import { Gurdian, LocalGurdian, Students, UserName } from './student.interface'
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})
const gurdianNameschema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})
const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
  occupation: { type: String, required: true },
})
const studentSchema = new Schema<Students>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'], //enum type value
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianNameschema,
  localGurdian: localGurdianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inactive'],
})

// model create
export const StudentsModel = model<Students>('Students', studentSchema)
