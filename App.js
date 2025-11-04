function App() {
	// TODO: Create an array of space phenomena with emoji and name
	const spacePhenomena = [
	  { id: 1, name: "Asteroid Belt", emoji: "☄️" },
	  { id: 2, name: "Galactic Nebula", emoji: "🌌" },
	  { id: 3, name: "Black Hole", emoji: "🕳️" },
	  { id: 4, name: "Supernova Explosion", emoji: "💥" },
	  { id: 5, name: "Pulsar", emoji: "⚡" },
	  { id: 6, name: "Quasar", emoji: "💫" },
	  { id: 7, name: "Exoplanet", emoji: "🪐" },
	  { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
	  { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
	  { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
	];
  
	// TODO: Create an array of possible observation statuses
	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  
	// TODO: Write a helper function to randomly select a status
	function getRandomStatus() {
	  const index = Math.floor(Math.random() * observationStatuses.length);
	  return observationStatuses[index];
	}
  
	return (
	  <div>
		<h1>Space Phenomena Tracker</h1>
  
		{/* TODO: Map through each space phenomenon */}
		<ul>
		  {spacePhenomena.map((item) => {
			// TODO: Assign a random observation status to each phenomenon
			const status = getRandomStatus();
  
			// TODO: Use conditional rendering to check for "Prime for Study"
			const isPrime = status === "🚀 Prime for Study";
  
			return (
			  <li key={item.id}>
				{item.emoji} {item.name} - {status}
				{/* TODO: If status is "Prime for Study", show an extra message */}
				{isPrime && <span> ⚙️ Bring your advanced equipment!</span>}
			  </li>
			);
		  })}
		</ul>
	  </div>
	);
  }
  
  // TODO: Render the App component inside the root element
  ReactDOM.render(<App />, document.getElementById("root"));  