import Bug from "./Bug";

export default function Home() {
	// Added item key because it was missing.
	return (
		<Bug>
			{Array.from({ length: 6 }, (_, i) => i).flatMap((_, idx) => (
				<div key={idx}>F</div>
			))}
		</Bug>
	);
}
