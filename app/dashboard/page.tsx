"use client"
import Dashboard from '@/components/dashboard/Dashboard';
import { useSession } from "next-auth/react";


const page = () => {
  const { data: session, status } = useSession()
  console.log(session);
  return (
    <Dashboard />
  )
}

export default page