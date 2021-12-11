import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function RepositoryItem(props) {
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
