export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export var FeeAmount;
(function (FeeAmount) {
    FeeAmount[FeeAmount["LOWEST"] = 100] = "LOWEST";
    FeeAmount[FeeAmount["LOW"] = 500] = "LOW";
    FeeAmount[FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    FeeAmount[FeeAmount["HIGH"] = 10000] = "HIGH";
})(FeeAmount || (FeeAmount = {}));
/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS = {
    [FeeAmount.LOWEST]: 1,
    [FeeAmount.LOW]: 10,
    [FeeAmount.MEDIUM]: 60,
    [FeeAmount.HIGH]: 200
};
//# sourceMappingURL=constants.js.map