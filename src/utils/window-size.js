const size = () => {
    document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
    document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
};

export default size;