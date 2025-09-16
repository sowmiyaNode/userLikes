var knex = require("knex");

const config = {
  client: "mysql2",
  connection: {
    host: "localhost",
    database: "mysql",
    user: "sowmiya",
    password: "password",
  }
};

const createStudent = async (data) => {
  const Knex = new knex(config);
  try {
    const student = await Knex("student").insert(data);
    if(student.length) {
      return {error: false, data: student}
    }
    return {error: true}
  } catch (error) {
    Knex.destroy();
    return {error: true}
  }
};

module.exports = { createStudent };
