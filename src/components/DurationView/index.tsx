import React from "react";
import Schedule from "@material-ui/icons/Schedule";

interface Props {
  isStarted: boolean;
  duration: number;
}
export function DurationView({ isStarted, duration }: Props) {
  return (
    <>
      {isStarted ? (
        duration > 0 ? (
          <>
            <Schedule /> <b>{duration} Days</b>{" "}
          </>
        ) : (
          <b>Expired</b>
        )
      ) : (
        <b>Not started</b>
      )}
    </>
  );
}
