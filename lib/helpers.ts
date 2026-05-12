export function displayClassname(dostupnost: string) {
    if (dostupnost === 'rezervovaný' || dostupnost === 'predaný') return 'bad'
    return '';
}
