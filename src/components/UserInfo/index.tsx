import { UserInfoContainer, AvatarStyled, UserName, UserDescription, RatingStyled } from "./styles";

interface Props {
    pictureUrl?: string;
    name: string;
    rating: number;
    description?: string;
}

export default function UserInfo({ pictureUrl, name, rating, description }: Props) {
    return (
        <UserInfoContainer>
            <AvatarStyled src={pictureUrl}>{name[0]}</AvatarStyled>
            <UserName>{name}</UserName>
            <RatingStyled readOnly value={rating} />
            <UserDescription>{description}</UserDescription>
        </UserInfoContainer>
    )
}
