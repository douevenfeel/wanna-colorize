import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'

import { Header } from 'components/Header'

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}
