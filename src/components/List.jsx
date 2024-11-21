import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "./Card";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc&per_page=10&page=${page}`
      );
      setRepos((prevRepos) => [...prevRepos, ...response.data.items]);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !loading // Only trigger scroll if not loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard key={repo.id + page} repo={repo} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default RepoList;
