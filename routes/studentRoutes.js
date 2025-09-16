const api = '/student';
const {createStudent} = require("../controllers/studentControllers.js");
const responseFormat = require("../utility/responseFormat.js");
function studentRoutes(app, auth) {
    app.post(api + "/createStudent", auth , async(req, res) => {
        await createStudent(req.body, (response) => {
          res.send(responseFormat(response));
        });
    });
}
module.exports = studentRoutes;