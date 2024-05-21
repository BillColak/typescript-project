"use client"

import React from 'react';
import {useDataProvider} from "@/components/data-provider";
import {Input} from "@/components/ui/input";

function Page() {
  const { userId, setUserId } = useDataProvider();
  return (
    <div>
      <h1>User Page</h1>
      <p>Current User ID from context manager: {userId}</p>
      <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
    </div>
  );
}

export default Page;
