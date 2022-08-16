import express from "express"

const app = express()
const port = 3000
const apiSecret = "c804a53e-e4c1-4def-95ab-266b0ad81b5f"

app.get("/", async (req, res) => {
	// SERVER API SECRET
	const response = await fetch("http://localhost:4000", {
		method: "GET",
		headers: {
			"Api-Secret": apiSecret
		}
	})
	const data = await response.json()
	res.json(data)

	// BROWSER NO API SECRET
	// res.send(`
	// 	<h1>Frontend</h1>
	// 	<script type="module">
	// 		const h1 = document.querySelector("h1")
	// 		const response = await fetch("http://localhost:4000", {
	// 	 		method: "GET"
	//  		})
	// 		const body = await response.json()
	// 		h1.innerText = body.message
	// 	</script>
	// `)
})

app.get("/auth/signup", async (req, res) => {
	// SERVER API SECRET
	// const response = await fetch("http://localhost:4000/auth/signup", {
	// 	method: "GET",
	// 	headers: {
	// 		"Api-Secret": apiSecret
	// 	}
	// })
	// const data = await response.json()
	// res.json(data)

	// BROWSER NO API SECRET
	res.send(`
		<h1>Frontend</h1>
		<script type="module">
			const h1 = document.querySelector("h1")
			const response = await fetch("http://localhost:4000/auth/signup", {
		 		method: "GET"	 			
	 		})
			const body = await response.json()
			h1.innerText = body.message
		</script>
	`)
})

app.get("/auth/logout", async (req, res) => {
	// SERVER API SECRET
	// const response = await fetch("http://localhost:4000/auth/logout", {
	// 	method: "GET",
	// 	headers: {
	// 		"Api-Secret": apiSecret
	// 	}
	// })
	// const data = await response.json()
	// res.json(data)

	// BROWSER NO API SECRET
	res.send(`
		<h1>Frontend</h1>
		<script type="module">
			const h1 = document.querySelector("h1")
			const response = await fetch("http://localhost:4000/auth/logout", {
		 		method: "GET"
	 		})
			const body = await response.json()
			h1.innerText = body.message
		</script>
	`)
})

app.listen(port, () => console.log(`Frontend running on http://127.0.0.1:${port}`))
