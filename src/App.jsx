import "./App.css";
import React, { useState } from "react";
import JobList from "./Components/JobList/JobList";

export default function App() {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const handleCreateNewJob = () => {
    setCreateJobOpen(true);
  };

  return (
    <main>
      {isCreateJobOpen ? (
        <CreateJob />
      ) : (
        <div>
          <button>Create New Job Post</button>
          <JobList />
        </div>
      )}
    </main>
  );
}
