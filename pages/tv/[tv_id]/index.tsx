import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import DetailsHeader from "../../../components/Details/DetailsHeader";
import { CastCredit, Keywords, TvShowDetails } from "../../../types/TvShowDetails";
import axiosClient from "../../../utils/axiosClient";

const TVDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  details,
  creditsCast,
  keywords,
}) => {
  return (
    <main className="mt-16 bg-white min-h-screen">
      <DetailsHeader details={details} />
    </main>
  );
};
export default TVDetailPage;

export const getServerSideProps: GetServerSideProps<{
  details: TvShowDetails;
  creditsCast: CastCredit;
  keywords: Keywords;
}> = async (ctx) => {
  const { tv_id } = ctx.query;

  const { data } = await axiosClient.get(`${process.env.PUBLIC_BASE_URL}/api/tv/${tv_id}/details`);

  const { details, creditsCast, keywords } = data;
  return {
    props: {
      details,
      creditsCast,
      keywords,
    },
  };
};
