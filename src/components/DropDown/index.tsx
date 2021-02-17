import React from "react";

//Refer from react-select library

const Menu = (props: any) => {
  const shadow = "hsla(218, 50%, 10%, 0.1)";
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        // marginTop: 8,
        top: 0,
        position: "absolute",
        zIndex: 2,
        width: "100%",
      }}
      {...props}
    />
  );
};
const Blanket = (props: any) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: "fixed",
      zIndex: 1,
    }}
    {...props}
  />
);

interface Props {
  children: React.ReactChildren;
  isOpen: boolean;
  target: React.ReactNode;
  onClose: () => void;
}

export const Dropdown = ({ children, isOpen, target, onClose }: Props) => (
  <div style={{ position: "relative", width: "100%" }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
