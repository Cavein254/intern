"use client";
import { getSessionsFromServer } from "@/middleware/serversession";
import { useSession } from "next-auth/react";

const page = async () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? <h1>Welcome Employer </h1> : <h1>Unauthorized Access</h1>}
    </div>
  );
};

export default page;
