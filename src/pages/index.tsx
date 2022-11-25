import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Login } from "../components/Login";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Home() {
  return <Login />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    return {
      props: {},
      redirect: {
        destination: "/menu",
        permanent: false,
      },
    };
  }
);
