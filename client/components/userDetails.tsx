"use client";

import { getUserDetail } from "@/app/api/login-api/accessToken";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState({ fName: "", lName: "" });

  useEffect(() => {
    const fetchUserDetail = async () => {
      const userDetail = await getUserDetail();
      setUserDetail(userDetail);
    };
    fetchUserDetail();
  }, []);

  return (
    <>
<<<<<<< HEAD
      {userDetail.fName} {userDetail.lName}
=======
      {userDetail?.fName} {userDetail?.lName}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    </>
  );
};

export default UserDetail;
