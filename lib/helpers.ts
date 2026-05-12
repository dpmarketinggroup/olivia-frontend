export function displayClassname(dostupnost: any) {
    if (dostupnost === 'rezervovaný' || dostupnost === 'predaný') return 'bad'
    return '';
}
