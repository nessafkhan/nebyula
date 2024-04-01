import React, { useState } from "react";
import { createJob } from "../../http/jobPosting";

const CreateJob = () => {
  const initialFormState = {
    title: "",
    description: "",
    location: "",
    deadline: "",
    contact: "",
    email: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      await createJob(formState);
      setIsSuccess(true);
      setFormState(initialFormState);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>description</label>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>loction</label>
        <input
          type="text"
          name="location"
          value={formState.location}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Submit by:</label>
        <input
          type="date"
          name="deadline"
          value={formState.deadline}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="contact"
          value={formState.contact}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CreateJob;
