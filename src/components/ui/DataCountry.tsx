import type { Country } from "~/pages/types";

interface Props {
  data: Country[];
}

const DataCountry: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{data[0] ? data[0].name.common : null}</h1>

      <p>Capital: {data[0] ? data[0].capital[0] : null}</p>
      <p>flag: {data[0] ? data[0].flag : null} </p>
    </div>
  );
};

export default DataCountry;
