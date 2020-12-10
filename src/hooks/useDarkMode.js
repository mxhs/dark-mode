import React from 'react'

import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (isDarkMode) => {
    const [darkModeValue, setDarkModeValue] = useLocalStorage('Dark Mode', isDarkMode)

    return [darkModeValue, setDarkModeValue]
}
