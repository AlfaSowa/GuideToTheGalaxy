# Файловая система

## папка pages

### именование папок

- pages
    - login.tsx
    - profile
        - classes
        - index.tsx
    - [chapter]
        - [part]
            - index.tsx
        - index.tsx

### нейминг в файлах

/[chapter]/index.tsx

```js
    const Chapter = () => {
      return (
        <ChapterPage />
      );
    };

  export default Chapter;
```

/profile/index.tsx

```js
    const Profile = () => {
      return (
        <ProfilePage />
      );
    };

  export default Profile;
```

/login.tsx

```js
    const Login = () => {
      return (
        <LoginPage />
      );
    };

  export default Login;
```
