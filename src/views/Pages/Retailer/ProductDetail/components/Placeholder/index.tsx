import React from "react";

interface Props<T> {
  data: T | null | undefined;
  mainComponent: React.ReactChild;
  backupComponent?: React.ReactChild;
}
export const Placeholder = <T,>({
  data,
  mainComponent,
  backupComponent,
}: Props<T>) => {
  
  const backupOrDefaultComponent = backupComponent ?? null
   
  return <div>{data ? mainComponent : backupOrDefaultComponent}</div>;
};
