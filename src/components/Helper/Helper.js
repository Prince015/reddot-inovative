export const handleScroll = (element, prevScrollpos, setVisible, setPrevScrollPos) => {
    const currentScrollPos = element?.scrollTop
    // console.log(currentScrollPos)
    if (currentScrollPos > prevScrollpos) {
        setVisible(false)
    } else {
        setVisible(true)
    }
    setPrevScrollPos(currentScrollPos)
}