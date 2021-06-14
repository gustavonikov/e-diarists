import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core'
import theme from '../styles/themes/theme'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>e-diarists</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,600;1,700&display=swap" rel="stylesheet" />
				<link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
			</Head>
			<ThemeProvider theme ={theme}>
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
