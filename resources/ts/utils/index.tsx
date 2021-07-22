export const changeUndefinedToFalse = (param: boolean | undefined): boolean => {
    param == undefined ? (param = false) : undefined;
    return param;
};
