"use client";

const Bug = ({ children }) => {
	return <div>{children}</div>;
};

// Default export seems to be required for server rendering.
export default Bug;
