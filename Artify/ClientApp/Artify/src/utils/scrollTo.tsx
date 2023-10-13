export function scrollTo(target: string): void {
    const element = document.getElementById(target);
    element && element.scrollIntoView();
}