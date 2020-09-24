import React from "react"
import { Link } from "gatsby"
import cat from "../../static/cat.gif"

export default function Home() {
	return (
		<div className="container">
			<h1>Hello world!</h1>
			<Link to="/">Back Home</Link>
			<br />
			<Link to="/hello">Hello</Link>
			<br />
			<img src={cat} alt="cat" />
		</div>
	)
}
