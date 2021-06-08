---
sidebar_position: 2
---

# Writing your first page

Create a folder where you want your project to be. Open a terminal or command prompt in that folder and run:

```
mld init
```

Now, open vscode. In the menu bar click `File > Open Folder` and navigate to the directory you just ran your code in.

In the bottom right you will get a notification With the text "Do you want to install the recommended extensions?". Click install. This will install all of the necessary development dependencies for MEML.

## File structure

MLD creates a simple, easy to understand file structure. The following files are created:

- `.vscode/`: A set of configuration files for vscode. You don't really need to edit or understand this folder
- `.gitignore`: If you set up a git repo in this folder, this will stop you from uploading (committing) files you don't need to commit
- `package.json`: A bunch of stuff setup and maintained by MLD to maintain compatibility with nodejs and npm
- `app.json`: The configuration of your website
- `src/`: Where all of the files for your websites are stored

## See it live

MLD makes it incredibly easy to see your website in action. Press `Ctrl + ~` to open a new terminal in vscode. Run `mld dev` in that terminal. Now you can open [`http://localhost:8080`](http://localhost:8080) in a new tab in your browser.

## Make a change

In vscode, open the `src/index.meml` file. Replace

```meml
(h1 'Hello world!')
```

with

```meml
(h1 'My website')
```

If you go back to your browser, you will see the website has updated.
