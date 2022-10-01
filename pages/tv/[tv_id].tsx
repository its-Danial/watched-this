import { NextPage } from "next";
import { useRouter } from "next/router";

const TVDetailPage: NextPage = (props) => {
  const router = useRouter();
  const { tv_id } = router.query;
  return <h1 className="text-white mt-48 text-4xl">tv: {tv_id}</h1>;
};
export default TVDetailPage;
