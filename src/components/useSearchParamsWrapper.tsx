"use client";

import { useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';

export function useSearchParamsWrapper(): ReadonlyURLSearchParams {
  return useSearchParams();
} 