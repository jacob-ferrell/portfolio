export default function kebabCase(str) {
    return str.toLowerCase().replace(/\s/g, "-");
}