import { Avatar, experimentalStyled as styled, Rating } from "@material-ui/core"

export const UserInfoContainer = styled('div')`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        'avatar name'
        'avatar rating'
        'avatar description';
    gap: ${({ theme }) => theme.spacing(.5) + ' ' + theme.spacing(2)};

    background-color: ${({ theme }) => theme.palette.grey[50]};

    padding: ${({ theme }) => theme.spacing(3)};

    align-items: center;
`

export const UserName = styled('div')`
    font-weight: bolder;
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.text.primary};
    grid-area: name;
`

export const UserDescription = styled('div')`
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.text.secondary};
    grid-area: description;
`

export const AvatarStyled = styled(Avatar)`
    grid-area: avatar;
    width: 100%;
    height: initial;
    aspect-ratio: 1;
`

export const RatingStyled = styled(Rating)`
    font-size: 14px;
    grid-area: rating;
`