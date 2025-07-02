


import React from "react";
import { jobsData } from "../assets/assets";
import ResumeIcon from "../assets/icons8-upload-48.png";
import AvatarIcon from "../assets/icons8-avatar-48.png";

const ViewApplications = () => {
  let count = 1;

  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm: text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">User name</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Resume</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobsData.map((job) =>
              job.applicants.map((applicant, idx) => (
                <tr key={`${job._id}-${idx}`} className="text-gray-700">
                  <td className="py-2 px-4 border-b text-center">{count++}</td>
                  <td className="py-2 px-4 border-b text-center flex">
                    <img
                      src={AvatarIcon}
                      alt="avatar"
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    />
                    <span style={{ marginLeft: "10px" }}>{applicant.name}</span>
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">{job.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">{job.location}</td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={applicant.resumeUrl || "#"} className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume{" "}
                      <img
                        src={ResumeIcon}
                        alt="resume icon"
                        style={{ width: "16px", display: "inline" }}
                      />
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b relative">
                    <div className="relative inline-block text-left group">
                      <button className="text-gray-500 action-button">...</button>
                      <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border-gray-200 rounded shadow group-hover:block">
                        <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">Accept</button>
                        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Reject</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
