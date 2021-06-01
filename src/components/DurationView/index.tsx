import React from "react";
import Schedule from "@material-ui/icons/Schedule";
import { parseDateTimeDuration } from "helpers";

interface Props {
  isStarted: boolean;
  duration: number;
  showIcon: boolean;
}
export function DurationView({ isStarted, duration, showIcon = true }: Props) {
  return (
    <>
      {isStarted ? (
        duration > 0 ? (
          <>
            {showIcon && <Schedule />} <b>{parseDateTimeDuration(duration)}</b>{" "}
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
