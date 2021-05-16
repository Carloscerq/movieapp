export default function windowSize(window, setWindowSize){
    // Handler to call on window resize
    const handleResize = () => setWindowSize(window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight);

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
}