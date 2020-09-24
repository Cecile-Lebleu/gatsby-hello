import React from "react"
import { Link } from "gatsby"

export default function Home() {
	return (
		<div className="container">
			<h1>Home</h1>
			<Link to="/hello">Hello</Link>
			<br />
			<Link to="/hello-world">Hello, World!</Link>
		</div>
	)
}
