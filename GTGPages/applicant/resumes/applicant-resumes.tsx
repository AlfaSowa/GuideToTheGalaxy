import Link from "next/link";
import { FC } from "react";
import { Resumes } from "../../../interfaces/resumes";

interface IApplicantResumesPage {
  resumes: Resumes[];
}

const ApplicantResumesPage: FC<IApplicantResumesPage> = ({ resumes }) => {
  console.log(resumes);

  return (
    <div>
      {resumes.map((resume) => (
        <Link href={`resumes/${String(resume.id)}`} key={resume.id}>
          <a>{resume.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default ApplicantResumesPage;
