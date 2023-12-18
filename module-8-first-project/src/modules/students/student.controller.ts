import { Request, Response } from 'express'
import { studentServices } from './student.service'

// controller fn only request and response handle kore
// client thk amra data biivnnovbe ante pari. param dia,query param dia.ar big data hoile body thk
// jehetu database er kaj sehety async await use korbo.karon data fetch korte time lagte pare.
const createStudentController = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    //then  controller fn will call the service function to send the data.
    // service fn kj ses kore abar controller ke result dibe
    const result = await studentServices.studentCreatedToDB(studentData)

    // erpor controller sei data ke response akare client ke pathay dibe, response bivinno format e pathano jay. ami nicher ta follow korbo.
    res.status(200).json({
      success: true,
      message: 'student data created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
// controller fn banabo student er data service thk paia route e diar jnno
const getStudentData = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getALlStidentsFromDB()
    res.status(200).json({
      success: true,
      message: 'student data got successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
// controller fn banabo single student er data service thk paia route e diar jnno
const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'single student data got successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
// controller ke export korte hbe jate route ake use korte pare.route thk import kore call korte parbo.
export const StudentController = {
  createStudentController,
  getStudentData,
  getSingleStudentData,
}
