import { useState } from "react";
import Head from "next/head";
import { apiFetchers } from "../utils/apiFetchers";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const fetchAllUser = async () => {
    setLoading(true);

    const res = await apiFetchers({
      method: "GET",
      url: "https://reqres.in/api/users",
    });

    console.log(res);

    setLoading(false);
  };

  return (
    <div className="p-5">
      <Head>
        <title>Home | Fetchers</title>
      </Head>
      <h1 className="text-4xl font-bold">Fetchers</h1>
      <h1 className="text-1xl font-semibold mt-5"> List of all users!</h1>
      <button onClick={fetchAllUser} className="button w-32 mt-5">
        Fetch all users{" "}
      </button>

      <div> {loading ? "Loading..." : ""} </div>
    </div>
  );
}
