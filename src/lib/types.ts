export type Categories = 'sveltekit' | 'svelte' | 'neovim' | 'software';

export type Post = {
    title: string;
    slug: string;
    description?: string;
    date: string;
    categories: Categories[];
    published: boolean;
};
