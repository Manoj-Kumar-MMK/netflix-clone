import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./component/Row";
import request from "./component/Request";
import Poster from "./component/Poster";
import Header from "./component/Header";
function App() {
	const arr = Object.entries(request);
	return (
		<div>
			<Header />
			<Poster />
			{arr.map((item) => (
				<Row key={item[0]} title={item[0]} url={item[1]} />
			))}
		</div>
	);
}

export default App;
