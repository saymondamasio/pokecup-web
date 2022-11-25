import { GetServerSideProps, NextPage } from "next";
import { Album } from "../components/Album";
import { withSSRAuth } from "../utils/withSSRAuth";

const AlbumPage: NextPage = () => {
  return <Album />;
};

export default AlbumPage;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
