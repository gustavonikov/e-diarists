import PageTitle from '../components/PageTitle'
import SafeEnv from '../components/SafeEnv/index'
import UserInfo from '../components/UserInfo'
import TextFieldMask from '../components/TextFieldMask'
import { Button, Typography, Container, CircularProgress } from '@material-ui/core'
import { FormElementsContainer, ProfessionalsPaper, ProfessionalsContainer } from '../styles/pages/index.style'

import useHome from '../hooks/pages/home/useHome'

export default function Home() {
	const {
		cep,
		setCep,
		validCep,
		searchDiarists,
		diarists,
		error,
		searchDone,
		loading,
		remainingDiarists
	} = useHome()

	return (
		<div>
			<SafeEnv />
			<PageTitle
				title="Conheça os profissionais"
				subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
			/>

			<Container>
				<FormElementsContainer>
					<TextFieldMask
						mask="99.999-999"
						label="Digite seu CEP"
						fullWidth
						variant="outlined"
						value={cep}
						onChange={({ target }) => setCep(target.value)}
					/>
					{
						error && <Typography color="error">{error}</Typography>
					}
					<Button
						variant="contained"
						color="secondary"
						sx={{ width: '220px' }}
						disabled={!validCep || loading}
						onClick={() => searchDiarists(cep)}
					>
						{loading ? <CircularProgress size={20} /> : 'Buscar'}
					</Button>
				</FormElementsContainer>

				{searchDone && (
					diarists.length > 0 ?
					(
						<ProfessionalsPaper>
							<ProfessionalsContainer>
								{
									diarists.map((diarist, index) => {
										return (
											<UserInfo
												key={index}
												pictureUrl={diarist.foto_usuario}
												name={diarist.nome_completo}
												rating={diarist.reputacao}
												description={diarist.cidade}
											/>
										)
									})
								}

							</ProfessionalsContainer>

							<Container sx={{ textAlign: 'center' }}>
								{
									remainingDiarists > 0 && (
										<Typography sx={{ mt: 5 }}>
											... e mais {remainingDiarists} 
											{
												remainingDiarists > 1 ?
													'profissionais atendem'
													:
													'profissional atende'
											}

											{' ao seu endereço'}
										</Typography>
									)
								}

								<Button
									variant="contained"
									color="secondary"
									sx={{ mt: 5 }}
								>
									Contratar um profissional
								</Button>
							</Container>
						</ProfessionalsPaper>

					)
					:
					(
						<Typography align='center' color="textPrimary" sx={{ mt: 5 }}>
							Ainda não temos nenhuma diarista disponível em sua região
						</Typography>
					)
				)
				}


			</Container>
		</div>
	)
}
