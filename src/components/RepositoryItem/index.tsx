import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface RepositoryItemProps {
  informations: {
    name: string;
    description: string;
    html_url: string;
  };
}

function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <h1>{props.informations?.name}</h1>
      <span>{props.informations?.description}</span>
      <li>
        <a href={props.informations?.html_url}>
          Go to Repository
          <AiOutlineArrowRight />
        </a>
      </li>
    </>
  );
}

export default RepositoryItem;
