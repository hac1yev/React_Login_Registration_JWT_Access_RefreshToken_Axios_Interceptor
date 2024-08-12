import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();  

  console.log(searchParams.get("ss"));

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);

    params.set("ss", "ads");
    navigate(`${pathname}?${params}`)
  };
  
  const handleClick2 = () => {
    const params = new URLSearchParams(searchParams);

    params.set("dd", "sffd");
    navigate(`${pathname}?${params}`)
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click</button>
    </>
  );
};

export default SearchParams;