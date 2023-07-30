"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;


 

export const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(()=>{
    const fetchProviders = async ()=>{
      const res  = await getProviders();
      setProviders(res);
    }
    fetchProviders();
  },[])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map(
          (provider: Provider, i) => (
            <button key={i}>
              {provider.id}
            </button>
          )
        )}
      </div>
    )
  }
}
