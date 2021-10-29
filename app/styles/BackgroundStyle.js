import { Color } from "./Color";

export const BackgroundStyle = {
    secondaryBackground: {
        backgroundColor: Color.secondary,
    },
    lightBackground: {
        backgroundColor: Color.light,
    },
    secondaryBottomRoundedBackground: {
        backgroundColor: Color.secondary,
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    secondaryTopRoundedBackground: {
        backgroundColor: Color.secondary
    },
    secondaryTopRoundedBackgroundLogin: {
        backgroundColor: Color.primary
    },
    whiteShadowedCardView: {
        backgroundColor: Color.white,
        borderColor: Color.light_gray,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    },
}