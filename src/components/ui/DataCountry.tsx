import Image from "next/image";
import type { Country } from "~/pages/types";

interface Props {
  data: Country[];
}

const DataCountry: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="mt-4 flex justify-center">
      {data[0] && (
        <Image
          src={data[0].flags.svg}
          alt="Drapeau"
          width={250}
          height={150}
          className="rounded-2xl"
        />
      )}
    </div>
  );
};

export default DataCountry;
