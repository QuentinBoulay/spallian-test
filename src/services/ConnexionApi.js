import { useState, useEffect } from "react";
import Cards from "../components/card/Cards.js";
import Pagination from "../components/Pagination.js";
import Spinner from "../components/Spinner.js";
import { useQuery } from "react-query";

function ConnexionApi(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetcher function
  const getFacts = async () => {
    const res = await fetch(
      `https://swapi.dev/api/${props.theme}/?page=${currentPage}`
    );
    return res.json();
  };

  // Using the hook
  const { data, error, isLoading } = useQuery(
    ["data", props.theme, currentPage],
    getFacts
  );

  useEffect(() => {
    if (data && data.count) {
      const resultsParPage = 10;
      setTotalPages(Math.ceil(data.count / resultsParPage));
    }
  }, [data]);

  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading)
    return (
      <div className="loader-container">
        <Spinner />
      </div>
    );

  return (
    <>
      <Cards
        cards={data.results}
        theme={props.theme}
        currentPage={currentPage}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default ConnexionApi;
