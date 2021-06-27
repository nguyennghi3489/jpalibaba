import React from "react";

interface Props<T> {
  data: T | null | undefined;
  mainComponent: React.ReactChild;
  backupEmptyComponent?: React.ReactNode;
}
export const Placeholder = <T,>({
  data,
  mainComponent,
  backupEmptyComponent,
}: Props<T>) => {
  
  const backupOrDefaultComponent = backupEmptyComponent ?? null
   
  return <div>{data ? mainComponent : backupOrDefaultComponent}</div>;
};
