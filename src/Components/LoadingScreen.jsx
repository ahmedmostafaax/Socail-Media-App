import { Skeleton } from '@heroui/react'
import React from 'react'

export default function LoadingScreen() {
  return <>

 <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
  <div className="flex mb-4">
    <div className="ml-2 mt-0.5 w-full">
      <Skeleton className="h-4 w-1/3 rounded-lg mb-2" />
      <Skeleton className="h-3 w-1/4 rounded-lg" />
    </div>
  </div>
  
  <div className="space-y-2 mb-4">
    <Skeleton className="h-3 w-full rounded-lg" />
    <Skeleton className="h-3 w-full rounded-lg" />
    <Skeleton className="h-3 w-4/5 rounded-lg" />
    <Skeleton className="h-3 w-3/4 rounded-lg" />
  </div>
  
  <div className="flex justify-between items-center mt-5">
    <div className="flex">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-4 w-8 rounded-lg ml-2" />
    </div>
    <Skeleton className="h-4 w-24 rounded-lg" />
  </div>
</div>

  </>
}
