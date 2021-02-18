import { Gitmoji, AsyncRawGitmojisObjectProvider } from './types';
import utils from './utils';
import axios from 'axios';

const latestGitmojisProvider: AsyncRawGitmojisObjectProvider = () =>
    axios
        .get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
        .then(res => res.data);

const cachedGitmojisProvider: AsyncRawGitmojisObjectProvider = () =>
    new Promise<any>((resolve, reject) => resolve({}));


async function fetch(provider: AsyncRawGitmojisObjectProvider): Promise<Gitmoji[]> {
    return provider()
        .then(obj => {
            if (!obj || !obj.gitmojis || !obj.gitmojis.length) return [];

            const gitmojis: Gitmoji[] = [];
            for (const gitmoji of obj.gitmojis) {
                if (!utils.validate(gitmoji)) continue;

                const { name, description, emoji } = gitmoji;
                gitmojis.push({ name, description, emoji });
            }

            return gitmojis;
        })
        .catch(() => []);
}

export default {
    latestGitmojisProvider,
    cachedGitmojisProvider,
    fetch,
};
