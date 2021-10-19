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
```javascript
const Chapter = (): JSX.Element => {
  return (
    <ChapterPage />
  );
};

export default Chapter;
```

/pages/profile/index.tsx
```javascript
const Profile = (): JSX.Element => {
  return (
    <ProfilePage />
  );
};

export default Profile;
```
#### Нейминг в файлах страниц

- GTGPages
    - classes
        - class
            - new.component.tsx
            - class.component.tsx
            - class.module.scss
        - classes.component.tsx
        - classes.module.scss
        
#### Компоненты страниц

```javascript
//pages/user.tsx
const User = (): JSX.Element => {
  return (
    <UserPage />
  );
};

export default User;
```

```javascript
//GTGPages/user/page.component.tsx
const UserPage = (): JSX.Element => {
  return (
    //...
  );
};

export default UserPage;

```

```javascript
//GTGPages/user/new.component.tsx
const UserNew = (): JSX.Element => {
  return (
    //...
  );
};

export default UserNew;
```

### Пропсы

```javascript
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
