# Файловая система

### Папка pages

#### Именование папок

- pages
    - login.tsx
    - profile
        - classes
            - index.tsx
            - new.tsx
        - index.tsx
    - [chapter]
        - part.tsx
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

#### Компоненты страниц

```ts
//pages/user.tsx
const User = (): JSX.Element => {
  return (
    <UserPage />
  );
};

export default User;
```

```ts
//GTGPages/user/page.component.tsx
const UserPage = (): JSX.Element => {
  return (
    //...
  );
};

export default UserPage;

```

```ts
//GTGPages/user/new.component.tsx
const UserNew = (): JSX.Element => {
  return (
    //...
  );
};

export default UserNew;
```

### Пропсы

```ts
interface LoginProps {
  children: ReactNode;
  title?: string
}

const Login = ({ children, title }: LoginProps): JSX.Element => {
  return (
    <LoginPage />
  );
};

Login.defaultProps = {
  title: null
}

export default Login;
```
