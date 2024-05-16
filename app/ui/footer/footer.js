export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>© Copyright Jim Oputa {currentYear}</p>
        </div>
    );
}