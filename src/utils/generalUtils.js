export const toLocalTime = timestamp => {
    const createAt = new Date(timestamp);
    return (
        createAt.toLocaleString().slice(0, 17) +
        createAt.toLocaleString().slice(20, 24)
    );
};
