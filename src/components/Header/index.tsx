import { HeaderAppBar, HeaderLogo } from "./styles"
import { Container, Toolbar } from "@material-ui/core"

export default function Header() {
    return (
        <HeaderAppBar position="sticky">
            <Toolbar component={Container}>
                <HeaderLogo src="/img/logos/logo.svg" alt="e-diarists" />
            </Toolbar>
        </HeaderAppBar>
    )
}
