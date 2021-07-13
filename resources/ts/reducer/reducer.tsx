export const reducer = (
    state: boolean,
    action: "active" | "deactivate"
): boolean => {
    switch (action) {
        case "active":
            return true;
        case "deactivate":
            return false;
        default:
            return state;
    }
};
