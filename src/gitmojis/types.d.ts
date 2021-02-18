export type Gitmoji = {
    name: string,
    description: string,
    emoji: string,
}

export type RawGitmojisObject = {
    gitmojis: any[]
}

export type AsyncRawGitmojisObjectProvider = () => Promise<RawGitmojisObject>;