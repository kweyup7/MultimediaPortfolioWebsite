import Navbar from "@/Components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">WHO AM I?</h3>
          <p className="mb-4">
            Enthusiastic and results-driven IT student with a passion for
            technology and a solid foundation in computer science. Eager to
            contribute my technical skills and innovative mindset to a dynamic
            IT team. Currently pursuing a Bachelors in Business Information
            Technology in Strathmore University where I have demonstrated a
            commitment to academic excellence while actively engaging in
            hands-on projects and extracurricular activities.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            KEY SKILLS AND COMPETENCIES I'VE ACQUIRED
          </h3>
          <p className="mb-4">
            <strong>Problem-Solving:</strong> Proven ability to analyze complex
            problems and devise effective solutions. Demonstrated
            problem-solving skills through successful completion of challenging
            coding assignments.
          </p>
          <p className="mb-4">
            <strong>Team Collaboration:</strong> Excellent team player with the
            ability to communicate technical concepts clearly. I have
            collaborated on group projects, fostering an environment of mutual
            learning and achieving project objectives.
          </p>
          <p className="mb-4">
            <strong>Technical Proficiency:</strong> Adept in programming
            languages such as Java, C++, Python, PHP, and JavaScript with
            hands-on experience in Laravel framework. Possess a strong
            understanding of algorithms, data structures, and software
            development methodologies.
          </p>
          <p className="mb-4">
            <strong>Adaptability:</strong> Quick learner with a keen interest in
            staying updated with the latest advancements in technology. Adaptive
            to new environments, technologies, and methodologies, ensuring a
            proactive approach to continuous learning.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">Where Have I schooled?</h3>
          <p className="mb-4">
            <strong>2021-2025:</strong> Strathmore University - Bachelor of
            Business Information Technology
          </p>
          <p>
            <strong>2018-2020:</strong> Greensteds International School -
            A-Levels - Mathematics(A), ICT (B), Psychology(A)
          </p>
          <p>
            <strong>2017-2018:</strong> Greensteds International School - IGCSEs
            - 8 GCSEs at Grade A
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2"> WORK EXPERIENCE</h3>
          <div className="mb-6">
            <h4 className="font-bold">1. ST. MARY’S SCHOOL – Nairobi, Kenya</h4>
            <p className="mb-2">Volunteer work: Jan 2022 – March 2022.</p>
            <p className="mb-2">
              <strong>Duties and Responsibilities:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Collaborated with the school administration to create and manage
                meal cards for students, ensuring efficient and accurate
                distribution.
              </li>
              <li>
                Assisted in the maintenance and cleaning of computers,
                contributing to a conducive learning environment.
              </li>
              <li>
                Provided support in the cafeteria, helping with various tasks to
                ensure smooth operations during meal times.
              </li>
            </ul>
            <p>
              <strong>Skills:</strong> Communication and interpersonal skills,
              Mentoring and support, Time management, Teamwork, Adaptability
            </p>
          </div>

          <div>
            <h4 className="font-bold">
              2. ST. ANDREW’S TURI PREP SCHOOL - Nakuru, Kenya
            </h4>
            <p className="mb-2">Gap student: Sep 2020 - Jun 2021</p>
            <p className="mb-2">
              <strong>Duties and Responsibilities:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Assisted in overseeing the day-to-day operations of the boarding
                house, ensuring a safe and supporting environment for students
                during the COVID-19 pandemic.
              </li>
              <li>
                Conducted Mathematics and Physical Education classes, employing
                engaging teaching methods to enhance student learning.
              </li>
              <li>
                Generated comprehensive reports and presentations based on
                feedback questionnaires from both students and staff.
              </li>
              <li>
                Collaborated with colleagues to analyze feedback data, identify
                areas for improvement, and implement effective solutions.
              </li>
              <li>
                Maintained open communication channels with students, parents,
                and staff to address concerns and promote a positive community
                atmosphere.
              </li>
            </ul>
            <p>
              <strong>Skills:</strong> Communication and Collaboration,
              Mentoring and Tutoring, Leadership and Teamwork, Organizational
              skills
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            ROLES IN LEADERSHIP AND PARTICIPATION
          </h3>
          <ul className="list-disc pl-6">
            <li>Class Representative - 2022-2024 at Strathmore University</li>
            <li>
              Deputy Head Boy – 2019-2020 at Greensteds International School
            </li>
            <li>
              Games Captain – 2018-2019 at Greensteds International School
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2">AWARDS OBTAINED</h3>
          <ul className="list-disc pl-6">
            <li>Dean’s List, Strathmore University for 3 years</li>
            <li>
              Sports and Academic scholarship at Greensteds International school
              for excellence in both fields.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default page;
