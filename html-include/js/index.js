const Greet = ({name}) => <h1>Hallo, {name}</h1>;

ReactDOM.render(
	<Greet name="Leser" />,
	document.getElementById('root')
);