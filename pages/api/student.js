import { promises as fs } from "fs";
import path from "path";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      getAllStudents(req, res);
      break;
    case "POST":
      addStudent(req, res);
      break;
  }
}

const getAllStudents = async (req, res) => {
  try {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileContents = await fs.readFile(jsonDirectory + "/students.json", "utf-8");
    res.status(200).json({
      students: JSON.parse(fileContents),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addStudent = async (req, res) => {
  try {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileContents = await fs.readFile(jsonDirectory + "/students.json", "utf-8");
    const students = JSON.parse(fileContents);

    const { firstName, lastName, dob } = req.body;

    const newStudent = {
      firstName,
      lastName,
      dob,
    };
    students.push(newStudent);

    await fs.writeFile(jsonDirectory + "/students.json", JSON.stringify(students));
    res.status(200).json({
      message: "Student Added",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
