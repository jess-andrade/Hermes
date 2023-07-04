import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/trends");
  }, []);

  return <div>Loading...</div>;
};

export default RedirectPage;
