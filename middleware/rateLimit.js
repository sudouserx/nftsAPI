import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
    points: 10, // Point budget
    duration: 60, // Reset points every 1 minute
})

const limitRate = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => {
            next()
        })
        .catch(() => {
            res.status(429).send("Too many requests")
        })
}

export default limitRate;