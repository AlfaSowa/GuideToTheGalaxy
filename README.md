# Файловая система

### Папка pages

#### Именование папок

- pages
    - login.tsx
    - profile
        - classes
        - index.tsx
    - [chapter]
        - [part]
            - index.tsx
        - index.tsx

#### Нейминг в файлах

/pages/[chapter]/index.tsx
```js
const Chapter = (): JSX.Element => {
  return (
    <ChapterPage />
  );
};

export default Chapter;
```

/pages/profile/index.tsx
```js
const Profile = (): JSX.Element => {
  return (
    <ProfilePage />
  );
};

export default Profile;
```

### Пропсы

```js
interface LoginProps {
  children: ReactNode;
  title?: string
}

const Login = ({ children, string }: LoginProps): JSX.Element => {
  return (
    <LoginPage />
  );
};

export default Login;
```
### Компоненты страниц

```js
//pages/profile.tsx
const Profile = (): JSX.Element => {
  return (
    <ProfilePage />
  );
};

export default Profile;
```

```js
//GTGPages/profile/profile.component.tsx
const ProfilePage = (): JSX.Element => {
  return (
    //...
  );
};

export default ProfilePage;
```
