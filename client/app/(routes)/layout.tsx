"use client";
import Image from "next/image";

import { Navbar } from "@/components/navbar";
import { getAccessToken, setAccessToken } from "../api/login-api/accessToken";
<<<<<<< HEAD
import { redirect, useRouter } from "next/navigation";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Suspense, useEffect, useState } from "react";
=======
import { redirect, useParams, usePathname, useRouter } from "next/navigation";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Suspense, useCallback, useEffect, useState } from "react";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import Footer from "@/components/footer";
import { useIdleTimer } from "react-idle-timer";
import Loading from "./loading";
import { toast } from "@/components/ui/use-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (!getAccessToken()) {
      redirect("/login");
    }
  }, []);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);

  const [timeout, setTimeout] = useState(5000 * 60); // 5 minute
  const [lastActive, setLastActive] = useState(Date.now());
  const { getRemainingTime, isIdle } = useIdleTimer({
    timeout,
    onIdle: () => {
      setAccessToken("");
      toast({
        variant: "destructive",
        title: "Automatic Logout.",
        description: "You have been away for 5 minutes.",
      });
      router.push("/login");
    },
    onActive: () => {
      setLastActive(Date.now());
    },
=======
  const timeoutTime = parseInt(process.env.NEXT_PUBLIC_IDLE_TIMEOUT || '5000', 10);
  const [isLoading, setIsLoading] = useState(false);
  const [timeout, setTimeout] = useState(timeoutTime * 60); // 5 minutes
  const [lastActive, setLastActive] = useState(Date.now());

  const onIdle = useCallback(() => {
    setAccessToken("");
    toast({
      variant: "destructive",
      title: "Automatic Logout.",
      description: "You have been away for 5 minutes.",
      
    });
    router.push("/login");
  }, [router]);

  const onActive = useCallback(() => {
    setLastActive(Date.now());
  }, []);

  const { getRemainingTime, isIdle } = useIdleTimer({
    timeout,
    onIdle,
    onActive,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    debounce: 500,
  });

  useEffect(() => {
    const handleMouseMove = () => {
<<<<<<< HEAD
      setLastActive(Date.now());
    };
    const handleKeyPress = () => {
      setLastActive(Date.now());
    };

=======
      const now = Date.now();
      if (now - lastActive > 1000) {
        setLastActive(now);
      }
    };

    const handleKeyPress = handleMouseMove;

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keypress", handleKeyPress);
    };
<<<<<<< HEAD
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar setIsLoading={setIsLoading} />
        <Suspense fallback={<Loading />}>
          <div className="flex-grow">{children}</div>
        </Suspense>
        <Footer />
=======
  }, [lastActive]);

  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const baseRoute = pathParts[1] || ""; // Get the first part after the base URL
  console.log(baseRoute, "baseRoute");

  return (
    <>
      <div className="relative flex h-screen flex-col">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div className="flex-grow">{children}</div>
        </Suspense>
        <div className={`${baseRoute == "patient-overview" ? "hidden" : ""}`}>
          <Footer />
        </div>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      </div>
    </>
  );
}
