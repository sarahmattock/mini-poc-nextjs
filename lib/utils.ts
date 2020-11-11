export function getDataSafely(arrayOfItems: any[], key: string, propertyName: string) {
    return arrayOfItems.length > 0 && arrayOfItems.find(a => a.contentSlug === key) ?
    arrayOfItems.find(a => a.contentSlug === key)[propertyName]
    : "";
}