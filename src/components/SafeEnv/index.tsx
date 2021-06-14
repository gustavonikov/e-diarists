import { SafeEnvContainer } from './styles'
import { Container } from '@material-ui/core'

export default function SafeEnv() {
    return (
        <SafeEnvContainer>
            <Container>
                Ambiente Seguro <i className="twf-lock" />
            </Container>
        </SafeEnvContainer>
    )
}
