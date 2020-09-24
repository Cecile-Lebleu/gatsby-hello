import React from "react"
import { Link } from "gatsby"

export default function Home() {
	return (
		<div className="container">
			<h1>Hello!</h1>
			<Link to="/">Back Home</Link>
			<br />
			<Link to="/hello-world">Hello, World!</Link>
		</div>
	)
}
