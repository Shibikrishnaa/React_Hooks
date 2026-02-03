import React, { useState } from "react";

function Posted() {
  const [company, setCompany] = useState({
    name: "",
    address: "",
    industry: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Hi the API started working!");

    fetch("https://dummy-json.mock.beeceptor.com/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    })
      .then((response) => response.json())
      .then((data) => console.log("It worked", data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="first">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setCompany({ ...company, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Address"
          onChange={(e) =>
            setCompany({ ...company, address: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Industry"
          onChange={(e) =>
            setCompany({ ...company, industry: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Country"
          onChange={(e) =>
            setCompany({ ...company, country: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Posted;
