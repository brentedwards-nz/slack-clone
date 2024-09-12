"use client";

import { useState } from "react";
import { SignInflow } from "./types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";
import { Button } from "@/components/ui/button";

function AuthScreen() {
  const [state, setState] = useState<SignInflow>("signIn");

  const toggleState = () => {
    if(state === "signIn")
      setState("signUp")
    else
      setState("signIn")
  }

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-[420px]">
          {state === 'signIn' ? <SignInCard/> : <SignUpCard/>}
        </div>
        {/* <div className="md:h-auto md:w-[420px]">
          <Button onClick={toggleState}>Toggle</Button>
        </div> */}
    </div>
  )
}
export default AuthScreen