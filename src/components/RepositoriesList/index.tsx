import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";
import "./styles.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoriesList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/natanfirst/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div className="Container">
      <h1 className="Title">Natan Repositories</h1>
      <ul>
        {repositories.map((item) => {
          return <RepositoryItem key={item.name} informations={item} />;
        })}
      </ul>
    </div>
  );
}
