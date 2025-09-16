
const Service = require("../service")
const createStudent = (req, callback) => {
   const studentAddition = Service.createStudent(req)
    if(studentAddition.error) {
        callback({
            error: true
        })
    }
    callback({
        error: false,
        data: studentAddition.data
    })
}
module.exports = {createStudent}

