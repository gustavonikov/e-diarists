import { PageTitleContainer, PageTitleStyled } from './styles'

interface Props {
    title: string;
    subtitle: string;
}

export default function PageTitle({ title, subtitle }: Props) {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {title}
            </PageTitleStyled>
            {subtitle}
        </PageTitleContainer>
    )
}
