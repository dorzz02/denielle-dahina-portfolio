export const Footer = () => {
    return (
        <>
            <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
                <p>
                    &copy; {new Date().getFullYear()} Denielle.co All rights reserved.
                </p>
            </footer>
        </>
    )
}