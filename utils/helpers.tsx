export const fillId = (id: number) => {
    return ('0000'+id).slice(-3);
}

export const capitalize = (str: string) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
