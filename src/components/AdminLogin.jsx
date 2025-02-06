import React from 'react'
import { SignIn } from "@clerk/clerk-react";

const AdminLogin = () => {
  return <div className='mt-10 flex items-center w-full justify-center'><SignIn signInUrl='/register'/></div>;
}

export default AdminLogin