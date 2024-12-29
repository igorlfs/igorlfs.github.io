---
title: Using Neovim as a terminal multiplexer
description: Using tabs and the builtin terminal to build a poor man's tmux
date: '2024-10-13'
categories:
    - neovim
    - software
published: true
---

> **Guide assumes you're using neovim 0.11+**

One of the main features of a terminal multiplexer is that they can spawn multiple "windows". Of course, a powerful multiplexer can offer much more, with detachable sessions and so on, but I would assume the most common use case for a multiplexer is plainly it's... "multiplexing" capability. If you're currently using a multiplexer mainly for this reason and you're a bit unhappy with your current setup, and if you also happen to be a neovim user, this guide was made specifically for you! Let's explore neovim's builtin functionalities to build a poor man's tmux!

For as long as I've been using vim, I've been using its tab functionality. And honestly, I'm surprised with how often it's overlooked. Tabs in vim are slightly different from traditional tabs found in other programs: a tab can show *multiple* windows in any arrangement. When you launch vim with a file as an argument, you create a tab containing a single window. You can, then, manipulate the windows using commands such as `:split`, to split your screen horizontally, creating another "view" (window) for your current file. There are plenty of window commands to do the most common operations one would expect from a... window manager. You can read more about them with `:h CTRL-W`.

There's another concept in vim that often gets mixed up with tabs: buffers. A buffer is the in-memory representation of a file. But many people, usually coming from other editors, think that vim's tabs should behave as a "collection of buffers" (i.e., a list with the files that are currently open). Many plugins mimic this behavior (a popular one is [bufferline](https://github.com/akinsho/bufferline.nvim)). And if that fits your workflow, fantastic! But I find vanilla vim tabs the most powerful. A common use case is to create a tab for each project you're working on, so you can have a single neovim instance[^1] do all the work. That sure sounds multiplexy!

However, we'll follow a different approach. I like to have a single neovim instance for each project I'm working on, and each neovim instance has its own tabs. To me, each tab is kinda like a "mental state". To explain that, I'll use the neovim instance I'm using to write this blog post: I have 5 tabs open, some contain posts, another one contains 2 CSS-related files (I need to tweak some stuff, but I don't wanna deal with that right now), and the last one is a terminal running `vite dev` to run the blog. All of these tabs have a "meaning" that would be otherwise messy to manage without using tabs. Of course, the neovim community has built dozens of plugins to "manage" the usage of multiple files. A popular option is [harpoon](https://github.com/ThePrimeagen/harpoon). Again, if you're happy using harpoon (or any of the alternatives), fantastic! But I find these solutions to be a bit "overengineered".

The wise among you may have noticed I haven't talked about the usage of vim's tabs just yet. That's because I find the default bindings to be rather non-ergonomic. Let's take a look at the navigation: you can use `gt` to go the next tab and `gT` to go to the previous tab. Most vim mappings can be repeated when preceded with a number: you can use `10ifoo` in normal mode to insert the word "foo" 10 times[^2]. By that logic, if you were to use `2gt`, one would expect to go 2 tabs forward, but what happens is that you jump to the second tab, regardless of how many tabs you have open (which is a little weird, but not a big deal). What I annoys me the most is that I'm often switching tabs, so much so that pressing *those* 3 keys feels like too much effort. Surprisingly, Chrome comes to the rescue! Most popular browsers allow navigating between tabs using `<A-[x]`, where `[x]` is the tab's number. So I borrowed that for my config, as follows:

```lua
local str = string.format

for i = 1, 9 do
 vim.keymap.set("n", str("<A-%s>", i), str("%sgt", i), { desc = str("Goto tab %s", i) })
end
```

I have decided to adopt the `Alt` key as a "tab modifier" and also introduced some other mappings:

```lua
vim.keymap.set("n", "<A-0>", "<CMD>tablast<CR>", { desc = "Goto last tab" })
vim.keymap.set("n", "<A-]>", "<CMD>tabnext<CR>", { desc = "Goto next tab" })
vim.keymap.set("n", "<A-[>", "<CMD>tabprevious<CR>", { desc = "Goto prev tab" })
vim.keymap.set("n", "<A-->", "<CMD>tabm-<CR>", { desc = "Move tab to the left" })
vim.keymap.set("n", "<A-=>", "<CMD>tabm+<CR>", { desc = "Move tab to the right" })
vim.keymap.set("n", "<A-'>", "<CMD>tab split<CR>", { desc = "Clone window in new tab" })
```

The last one is particularly useful when ones wants to "temporally maximize" a window, by creating a new tab.

A final note on tabs is that the default `tabline` is a bit ugly. And by "a bit ugly" I mean that it has some limitations and it's clunky. Fortunately, like everything else in vim, it's customizable. Writing your own `tabline` is doable (I used to have mine), but it's easier with a plugin. The one I use is [tabby.nvim](https://github.com/nanozuki/tabby.nvim)[^3]. Its biggest selling point is that tab names are made unique if they'd otherwise share the same name. That's a massive help when browsing a Rust codebase with lots of `mod.rs` or a SvelteKit project with lots of `+page.svelte`.

Now that we've covered (almost) everything about "multiplexing", let's talk some "terminal"!

I'd argue neovim's builtin terminal also lacks some usability. The default experience can be quite confusing, in fact. It goes like this: a new user hears about using a terminal directly inside of neovim. They decide to try it for themselves and promptly run a `:terminal`. The terminal shows up and, in true vim spirit, they enter "insert"[^4] mode with `i`. They run some commands, but once they try to go back to normal mode, they realize that `<ESC>` isn't working and they have to use a weird key combo (`<C-\><C-N>`) instead. Now, I'm no expert, but I don't find that very intuitive. Don't get me wrong, I'm sure there's a good reason for that to be the default behavior, and I'm not advocating for a change. As a workaround, what we can do instead is create a new keymap:

```lua
vim.keymap.set("t", "<Esc>", [[<C-\\><C-n>]], { desc = "Exit Terminal" })
```

There are some other quirks with `:terminal` (in spite of the [great improvement](https://github.com/neovim/neovim/pull/31443) with neovim 0.11). Namely, if you're using the `scrolloff` option, you might wanna disable it inside terminals. It behaves inconsistently between modes: it doesn't work inside terminal mode, and may cause undesired scrolling. You can disable it with an `autocmd`:

```lua
vim.api.nvim_create_autocmd("Termopen", {
 callback = function()
  vim.wo[0][0].scrolloff = 0
 end,
})
```

It's also worth noting that it would be pretty annoying to have to type `:terminal` every time we were to spawn a terminal. There's a shorthand for that, `:term`, but it's in no way short enough. Luckily, again, we can solve this issue with a keymap:

```lua
vim.keymap.set("n", "<C-w>e", "<CMD>term<CR>", { desc = "Terminal" })
```

And now we're done with configuring the terminal! Now you can mix and match terminals, tabs and whatnot. Of course, you could have a "multiplexing experience" without leveraging the power of tabs (some do), since vim offers many ways to manipulate windows. But to me, the job is so much easier with tabs.

Before we continue, there's another important limitation of neovim's terminal that you should be aware of: using the shell's builtin vi mode gets awkward. To the point where I prefer the default, emacs-like mode of [fish](https://fishshell.com/). To me, this isn't much of a big deal, but I can see how this would impact someone's workflow.

Let's talk about some alternatives to using the builtin terminal that also aren't based on an actual multiplexer. For the longest time, I used to have a "floating terminal" plugin. A common option is [toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim). Under the hood, these use the builtin terminal, but without the default cumbersomeness. But now that you know you can have a decent experience without a plugin (and also without having too much trouble), why bother with a plugin?

On the other hand, others prefer the builtin functionality from the shell, by suspending neovim[^5] with `<C-z>`, running the desired commands and then bringing neovim back with `fg`. This is nice, but I see some shortcomings: what if you need to run a command that takes too long to finish? Or what if it's a build related command you always want to be running? Of course, there are numerous ways to deal with these issues, but by using `:term` you avoid them altogether. Although, once more: if you're happy with `<C-z>`, great!

Before wrapping up this post I need to address two other factors that heavily influence the usability of this workflow. The first one is that it would be a pain in the ass to manage a bunch of neovim ([neovide](https://github.com/neovide/neovide)) instances without a decent window manager. If you're not using a tiling window manager, I can see how easily it would be to get lost if you had a bunch of *neovims* lying around. With [Hyprland](https://hyprland.org/) I don't have to worry about that: I use a workspace for each neovim instance. This setup isn't perfect (sometimes it's hard to remember which workspace holds the instance I'm looking for), but it gets the job done most of the time.

Another reasonable concern is... Quitting neovim. Seriously. Let's say you're quite comfortable with a bunch of tabs and terminals and so on. It would be infuriating if, once you quit neovim, all those arrangements were gone. Fortunately it doesn't have to be this way. We can use sessions. Sessions are a native feature of vim that allows you to save the state of the editor when you quit[^6]. To make experience smoother, I use a session plugin that allows me to search sessions and save additional data (e.g., breakpoints): [possession.nvim](https://github.com/jedrzejboczar/possession.nvim). I won't go into detail on how to use the plugin, but it should be straightforward.

And that's it! We've built a poor man's tmux using neovim! Thanks for reading! Check out my [dotfiles](https://github.com/igorlfs/dotfiles) to have a look at the actual implementation for this workflow.

[^1]: Neovim is even friendly to this use case, as it exposes commands such as `:tcd` to change the directory for the current tab only.
[^2]: That's a silly example, but you know the drill ;)
[^3]: The folks from `tabby.nvim` do a good job of explaining (in the README) how tabs can be powerful.
[^4]: Yes, it's the "Terminal" mode, but from a new user's perspective it *feels* like insert mode.
[^5]: Or any other command, really. An advantage of this approach is how agnostic it is.
[^6]: Obviously, you can save your state whenever you want. It just makes more sense when you're leaving.
