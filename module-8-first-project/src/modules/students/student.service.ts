import { Students } from './student.interface'
import { StudentsModel } from './student.model'
// service fn model er upor query chalaye database akta data insert kore dibe. erpor je result pabe seta abar controller e pathay dibe. aijnno studentCreatedToDB ke akta object akare export kore dite hbe.
const studentCreatedToDB = async (student: Students) => {
  const result = await StudentsModel.create(student)
  return result
}
// akhn akta fn banabo database thk sob student info pauar jonno.
const getALlStidentsFromDB = async () => {
  const result = await StudentsModel.find()
  return result
}
// / akhn akta fn banabo database thk akta specific id er  student info pauar jonno.
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentsModel.findOne({ id })
  return result
}
export const studentServices = {
  studentCreatedToDB,
  getALlStidentsFromDB,
  getSingleStudentFromDB,
}
