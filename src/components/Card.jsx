import React from "react";
import { FaStar } from "react-icons/fa";

const RepoCard = ({ repo }) => {
  const { name, html_url, description, stargazers_count, owner } = repo;
  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "b";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "m";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "k";
    return num.toString();
  };

  return (
    <div className="repo-card">
      <h3 className="repo-card__name">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <p className="repo-card__description">
        {description ? description : "No description available"}
      </p>
      <div className="repo-card__owner">
        <div className="repo-card__owner__info">
          <img
            src={owner.avatar_url}
            alt={`${owner.login}'s avatar`}
            className="repo-card__owner__avatar"
          />
          <span className="repo-card__username">{owner.login}</span>
        </div>
        <div>
          <div className="repo-card__stars">
            <FaStar className="repo-card__star-icon" />
            <span>{formatNumber(stargazers_count)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
