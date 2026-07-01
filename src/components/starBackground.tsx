import { useState, useEffect } from "react"

export const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; size: number; x: number; y: number; opacity: number; animationDuration: string }[]>([])
    const [meteors, setMeteors] = useState<{ id: number; size: number; x: number; y: number; delay: number; animationDuration: string }[]>([])

    useEffect(() => {
        const generateStars = () => {
            const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
            const newStars = []

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: `${Math.random() * 4 + 2}s`
                })
            }

            setStars(newStars)
        }
        generateStars()

        const generateMeteors = () => {
            const numberOfMeteors = 8
            const newMeteors = []

            for (let i = 0; i < numberOfMeteors; i++) {
                newMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuration: `${Math.random() * 3 + 3}s`
                })
            }

            setMeteors(newMeteors)
        }

        const handleResize = () => {
            generateStars()
            generateMeteors()
        }

        window.addEventListener('resize', handleResize)
        generateMeteors()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
        <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's'
                    }}
                />
            ))}
            {meteors.map(meteor => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size}px`,
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: meteor.animationDuration + 's'
                    }}
                />
            ))}
        </div>
        </>
    )
}