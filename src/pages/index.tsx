import type { GetServerSideProps } from "next";

import type { Country } from "./types";

import Head from "next/head";
import Layout from "~/components/hoc/Layout";
import DataCountry from "~/components/ui/DataCountry";
import Task from "~/components/ui/Task";
import Timer from "~/components/ui/Timer";
import TitleQuizz from "~/components/ui/TitleQuizz";
import AnswerForm from "~/components/ui/AnswerForm";

export const getServerSideProps: GetServerSideProps = async () => {
  let data: Country[] = [];

  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/name/france?fields=name,capital,flags",
    );
    if (!res.ok) {
      throw new Error(`Erreur HTTP: ${res.status}`);
    }
    data = await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
  }

  return { props: { data } };
};

const Home: React.FC<{ data: Country[] }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Quizz Country</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>

      <Layout>
        <main className="p-2">
          <div className="flex items-center justify-between">
            <TitleQuizz />
            <Timer />
          </div>
          <Task />
          <DataCountry data={data} />
          <AnswerForm />
        </main>
      </Layout>
    </>
  );
};

export default Home;
