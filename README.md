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
```ts
const Chapter = (): JSX.Element => {
  return (
    <ChapterPage />
  );
};

export default Chapter;
```

/pages/profile/index.tsx
```ts
const Profile = (): JSX.Element => {
  return (
    <ProfilePage />
  );
};

export default Profile;
```

### Пропсы

```ts
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

```ts
//pages/profile.tsx
const Profile = (): JSX.Element => {
  return (
    <ProfilePage />
  );
};

export default Profile;
```

```ts
//GTGPages/profile/profile.component.tsx
const ProfilePage = (): JSX.Element => {
  return (
    //...
  );
};

export default ProfilePage;
```
