import { GetServerSideProps, NextPage } from "next";
import { Menu } from "../components/Menu";
import { withSSRAuth } from "../utils/withSSRAuth";

const MenuPage: NextPage = () => {
  return <Menu />;
};

export default MenuPage;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
