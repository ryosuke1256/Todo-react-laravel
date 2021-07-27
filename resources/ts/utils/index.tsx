export const changeUndefinedToFalse = (param: boolean | undefined): boolean => {
    param === undefined && (param = false);
    return param;
};
