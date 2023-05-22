import React from "react";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const API = "https://api.github.com/repos/vercel/swr";

const Start: any = () => {
  const { data, error, loading }: any = useSWR(API, fetcher);

  console.log("Is data ready?", !!data);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default Start;
