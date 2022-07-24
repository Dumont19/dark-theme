const changeThemeBtn = document.querySelector('#change-theme')

function toggleDarkMode() {
    document.body.classList.toggle('dark')
}

function LoadTheme() {
    const darkMode = localStorage.getItem('dark')

    if(darkMode) {
        toggleDarkMode()
    }
}

LoadTheme()

changeThemeBtn.addEventListener('change', () => {
    toggleDarkMode()

    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
})