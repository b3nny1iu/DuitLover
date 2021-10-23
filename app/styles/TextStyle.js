import { Color } from "./Color";
import { Dimens } from "./Dimens";

export const TextStyle = {
    whiteBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.white,
        padding: 12,
    },
    secondaryBoldBigText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_big,
        color: Color.secondary,
    },
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
    },
    secondaryBoldCaptionText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_caption,
        color: Color.secondary,
    },
    darkBoldBigText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_big,
        color: Color.dark,
        padding: 12
    },
    darkBoldRegularText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_regular,
        color: Color.dark,
    },
}