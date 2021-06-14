import PageTitle from '../components/PageTitle'
import SafeEnv from '../components/SafeEnv/index'
import UserInfo from '../components/UserInfo'

export default function Home() {
	return (
		<div>
			<SafeEnv />
			<PageTitle
				title="Conheça os profissionais"
				subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
			/>

			<UserInfo
				pictureUrl="https://github.com/gustavonikov.png"
				name="Gustavo Chaves"
				rating={4}
				description="João Pessoa - PB"
			/>

			<UserInfo
				name="Victoria Nunes"
				rating={3}
				description="João Pessoa - PB"
			/>

		</div>
	)
}
