import path from "path"
import http from "http"
import Express from "express"
import favicon from "serve-favicon"
import proxy from "http-proxy-middleware"

const PORT = process.env.PROXY_PORT || 80
const API_URL = process.env.API_URL || "/api"
const BUILD_DIR = process.env.BUILD_DIR || path.join(__dirname, "build")

const app = new Express()

const server = http.Server(app)

if(/^http/.test(API_URL)) {
  app.use("/api", proxy({ target: API_URL }))
}

app.use(favicon(path.join(BUILD_DIR, "favicon.ico")))

app.use(Express.static(BUILD_DIR))

server.listen(PORT, (err) => {
	if(err) {
		console.error(err)
	}
	console.info("==> 💻  Server running on port %s", PORT)
})
