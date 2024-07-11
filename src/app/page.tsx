"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const IndexPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/overview");
  }, []);

  return null;
};

export default IndexPage;
