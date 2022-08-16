import express from "express"
import cors from "cors"

const app = express()
const port = 4000
const apiSecret = "c804a53e-e4c1-4def-95ab-266b0ad81b5f"
const whitelist = ["http://127.0.0.1:3000", "http://localhost:3000"]

app.use(
	cors({
		origin: whitelist
	})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ALL CHECK CORS SERVER API SECRET
app.all("*", (req, res, next) => {
	if (req.headers.origin === undefined) {
		if (req.header("Api-Secret") !== apiSecret) {
			res.json({
				status: "error",
				message: "Invalid API secret"
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

// GET /
app.get("/", (req, res) => {
	res.json({
		status: "success",
		message: "Backend is running"
	})
})

// GET SIGNUP
app.get("/auth/signup", (req, res) => {
	res.json({
		status: "success",
		message: "Signup successful"
	})
})

// ALL NOT FOUND
app.all("*", (req, res) => {
	res.json({
		status: "error",
		message: "Page not found"
	})
})

app.listen(port, () => console.log(`Backend running on http://127.0.0.1:${port}`))
