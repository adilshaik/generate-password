import React from "react";
import { Heading } from "../components/Heading";
import { StudentsTable } from "../components/StudentsTable";
import axios from "axios";

const Home = ({ students }) => {
  return (
    <div>
      <Heading />
      <StudentsTable students={students} />
    </div>
  );
};

export const getServerSideProps = async (req, res) => {
  const { data } = await axios.get(`${process.env.HOST_URL}/api/student`);

  return {
    props: {
      students: data.students,
    },
  };
};

export default Home;
