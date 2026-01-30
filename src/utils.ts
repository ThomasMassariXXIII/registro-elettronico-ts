export function strictPrompt(messaggio: string): string
{
    let risposta: string | null;

    do { risposta = prompt(messaggio); }
    while(!(risposta));

    return risposta;
}