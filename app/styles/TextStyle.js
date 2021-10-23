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
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    secondaryBoldRegularText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_Ca,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
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
        paddingHorizontal: 12,
        paddingBottom: 15,
    },
}